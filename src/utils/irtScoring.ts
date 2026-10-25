import { QuestionData, UserAnswer, IRTScoreResult, ElementType, QuestionType, DifficultyLevel } from '../types';

/**
 * Calculates partial or full credit for a single question response.
 */
export function calculateItemCredit(question: QuestionData, answer: UserAnswer): number {
  if (question.bentukSoal === 'PG') {
    return answer.selectedOption === question.kunciJawaban ? 1.0 : 0.0;
  }

  if (question.bentukSoal === 'PGK') {
    const correctKeys = Array.isArray(question.kunciJawaban) 
      ? question.kunciJawaban 
      : [question.kunciJawaban];
    const selected = answer.selectedOptions || [];
    if (selected.length === 0) return 0.0;

    let correctChosen = 0;
    let wrongChosen = 0;

    selected.forEach(opt => {
      if (correctKeys.includes(opt)) {
        correctChosen += 1;
      } else {
        wrongChosen += 1;
      }
    });

    const netScore = (correctChosen - wrongChosen) / correctKeys.length;
    return Math.max(0, Math.min(1.0, netScore));
  }

  if (question.bentukSoal === 'BS') {
    if (!question.pernyataanBenarSalah || !answer.statementAnswers) return 0.0;
    let correctCount = 0;
    const statements = question.pernyataanBenarSalah;

    statements.forEach(stmt => {
      const userChoice = answer.statementAnswers?.[stmt.id];
      if (userChoice !== undefined && userChoice === stmt.isCorrect) {
        correctCount += 1;
      }
    });

    return correctCount / statements.length;
  }

  return 0.0;
}

/**
 * Computes 2PL log-posterior at ability theta.
 */
function logPosterior(
  theta: number,
  items: { a: number; b: number; credit: number }[]
): number {
  // Standard normal prior: - 0.5 * theta^2
  let logLik = -0.5 * theta * theta;

  for (const item of items) {
    // P = 1 / (1 + exp(-a * (theta - b)))
    const z = item.a * (theta - item.b);
    // Stable calculation
    let p: number;
    let q: number;
    if (z >= 0) {
      const expNegZ = Math.exp(-z);
      p = 1 / (1 + expNegZ);
      q = expNegZ / (1 + expNegZ);
    } else {
      const expZ = Math.exp(z);
      p = expZ / (1 + expZ);
      q = 1 / (1 + expZ);
    }

    // Guard against log(0)
    const logP = Math.log(Math.max(1e-12, p));
    const logQ = Math.log(Math.max(1e-12, q));

    logLik += item.credit * logP + (1 - item.credit) * logQ;
  }

  return logLik;
}

/**
 * Estimates ability theta in [-3, 3] via Maximum A Posteriori (MAP).
 */
export function estimateTheta(items: { a: number; b: number; credit: number }[]): number {
  if (items.length === 0) return 0;

  // 1. Grid search over [-3, 3] with step 0.1
  let bestTheta = 0;
  let maxLogPost = -Infinity;

  for (let t = -3.0; t <= 3.001; t += 0.1) {
    const lp = logPosterior(t, items);
    if (lp > maxLogPost) {
      maxLogPost = lp;
      bestTheta = t;
    }
  }

  // 2. Refine locally around bestTheta with fine step 0.01
  const start = Math.max(-3.0, bestTheta - 0.15);
  const end = Math.min(3.0, bestTheta + 0.15);
  for (let t = start; t <= end; t += 0.01) {
    const lp = logPosterior(t, items);
    if (lp > maxLogPost) {
      maxLogPost = lp;
      bestTheta = t;
    }
  }

  return Math.max(-3.0, Math.min(3.0, bestTheta));
}

/**
 * Evaluates entire user progress and calculates full IRT score and analytics.
 */
export function calculateOverallAssessment(
  questions: QuestionData[],
  answers: Record<string, UserAnswer>
): IRTScoreResult {
  const itemParams: { a: number; b: number; credit: number }[] = [];
  let totalCreditSum = 0;
  let answeredCount = 0;
  let perfectCount = 0;

  const elementStats: Record<ElementType, { correct: number; total: number; percentage: number }> = {
    'Bilangan': { correct: 0, total: 0, percentage: 0 },
    'Aljabar': { correct: 0, total: 0, percentage: 0 },
    'Geometri dan Pengukuran': { correct: 0, total: 0, percentage: 0 },
    'Trigonometri': { correct: 0, total: 0, percentage: 0 },
    'Data dan Peluang': { correct: 0, total: 0, percentage: 0 },
  };

  const categoryStats: Record<QuestionType, { correct: number; total: number; percentage: number }> = {
    'PG': { correct: 0, total: 0, percentage: 0 },
    'PGK': { correct: 0, total: 0, percentage: 0 },
    'BS': { correct: 0, total: 0, percentage: 0 },
  };

  const difficultyStats: Record<DifficultyLevel, { correct: number; total: number; percentage: number }> = {
    'Menantang': { correct: 0, total: 0, percentage: 0 },
    'Sulit': { correct: 0, total: 0, percentage: 0 },
    'Sangat Sulit': { correct: 0, total: 0, percentage: 0 },
  };

  questions.forEach(q => {
    elementStats[q.elemen].total += 1;
    categoryStats[q.bentukSoal].total += 1;
    difficultyStats[q.tingkatKesulitan].total += 1;

    const ans = answers[q.id];
    if (ans && ans.isSubmitted) {
      answeredCount += 1;
      const credit = calculateItemCredit(q, ans);
      totalCreditSum += credit;
      if (credit >= 0.99) perfectCount += 1;

      itemParams.push({
        a: q.parameterIRT.a,
        b: q.parameterIRT.b,
        credit,
      });

      elementStats[q.elemen].correct += credit;
      categoryStats[q.bentukSoal].correct += credit;
      difficultyStats[q.tingkatKesulitan].correct += credit;
    }
  });

  // Calculate percentages
  (Object.keys(elementStats) as ElementType[]).forEach(el => {
    const s = elementStats[el];
    s.percentage = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
  });

  (Object.keys(categoryStats) as QuestionType[]).forEach(cat => {
    const s = categoryStats[cat];
    s.percentage = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
  });

  (Object.keys(difficultyStats) as DifficultyLevel[]).forEach(diff => {
    const s = difficultyStats[diff];
    s.percentage = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
  });

  // Scale score boundary rules:
  let finalScaleScore = 200;
  let estimatedTheta = 0;

  if (answeredCount === 0 || totalCreditSum === 0) {
    finalScaleScore = 200;
    estimatedTheta = -3.0;
  } else if (answeredCount === questions.length && totalCreditSum >= questions.length - 0.01) {
    finalScaleScore = 800;
    estimatedTheta = 3.0;
  } else {
    estimatedTheta = estimateTheta(itemParams);
    // Linear map: theta in [-3, 3] to [200, 800]
    const rawScore = 200 + 600 * ((estimatedTheta + 3) / 6);
    finalScaleScore = Math.max(200, Math.min(800, Math.round(rawScore)));
  }

  // Determine strongest & weakest elements
  const sortedElements = (Object.keys(elementStats) as ElementType[]).sort(
    (a, b) => elementStats[b].percentage - elementStats[a].percentage
  );

  const strongestElement = sortedElements[0];
  const weakestElement = sortedElements[sortedElements.length - 1];

  // Tailored recommendation from Mister Jo
  let teacherRecommendation = '';
  if (finalScaleScore >= 700) {
    teacherRecommendation = `Luar biasa! Daya penalaran matematis kamu sangat tajam. Penguasaan di elemen ${strongestElement} sangat solid. Pertahankan ketelitian saat mengerjakan soal tingkat 'Sangat Sulit' pada ${weakestElement} agar kamu siap menembus batas maksimal di TKA 2026!`;
  } else if (finalScaleScore >= 550) {
    teacherRecommendation = `Kerja bagus! Kemampuan analisis kamu sudah berada di jalur yang sangat baik, terutama pada elemen ${strongestElement}. Kunci peningkatan berikutnya adalah memperdalam pemahaman konsep dan melatih cara cepat di elemen ${weakestElement}.`;
  } else if (finalScaleScore >= 400) {
    teacherRecommendation = `Langkah awal yang baik! Kamu sudah mulai memahami alur pemodelan, tetapi masih sering terkecoh pada batasan atau syarat khusus. Disarankan untuk membaca stimulus lebih cermat dan menyimak pembahasan 8 tahap pada materi ${weakestElement}.`;
  } else {
    teacherRecommendation = `Jangan berkecil hati! Mempelajari soal penalaran membutuhkan pembiasaan berpikir runtut. Pelajari kembali 'Tahap 1 Memahami' dan 'Tahap 2 Model' di setiap pembahasan, lalu latih kembali cara cepatnya bersama Mister Jo.`;
  }

  return {
    estimatedTheta,
    scaleScore: finalScaleScore,
    totalAnswered: answeredCount,
    totalCorrect: perfectCount,
    totalQuestions: questions.length,
    elementPerformance: elementStats,
    categoryPerformance: categoryStats,
    difficultyPerformance: difficultyStats,
    strongestElement,
    weakestElement,
    teacherRecommendation,
  };
}
