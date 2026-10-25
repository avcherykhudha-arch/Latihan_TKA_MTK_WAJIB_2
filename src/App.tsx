import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  ChevronLeft, 
  ChevronRight, 
  Grid3X3, 
  BarChart3, 
  HelpCircle, 
  Sparkles,
  RotateCcw
} from 'lucide-react';

import { QuestionData, UserAnswer, UserProgress } from './types';
import { ALL_QUESTIONS } from './data/questions';
import { loadUserProgress, saveUserProgress, clearUserProgress, DEFAULT_PROGRESS } from './utils/storage';
import { calculateItemCredit } from './utils/irtScoring';
import { tts } from './utils/tts';

import { Navbar } from './components/Navbar';
import { AudioPlayer } from './components/AudioPlayer';
import { QuestionCard } from './components/QuestionCard';
import { ExplanationCard } from './components/ExplanationCard';
import { QuestionDrawer } from './components/QuestionDrawer';
import { DashboardModal } from './components/DashboardModal';
import { GuideModal } from './components/GuideModal';
import { ResetConfirmModal } from './components/ResetConfirmModal';
import { WelcomeScreen } from './components/WelcomeScreen';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(loadUserProgress);
  const [currentView, setCurrentView] = useState<'welcome' | 'practice'>('welcome');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Modals state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isResetOpen, setIsResetOpen] = useState(false);

  const currentQIndex = progress.currentQuestionIndex;
  const currentQuestion: QuestionData = ALL_QUESTIONS[currentQIndex] || ALL_QUESTIONS[0];
  const currentAnswer: UserAnswer | undefined = progress.answers[currentQuestion.id];

  // Check URL param ?autostart=1 for automated testing/fast jump
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        setCurrentView('practice');
      }
    }
  }, []);

  // Save to localStorage on progress state change
  useEffect(() => {
    saveUserProgress(progress);
  }, [progress]);

  // Read question on question switch if auto-play is enabled
  useEffect(() => {
    if (currentView === 'practice' && progress.settings.autoPlayAudio && !isMuted) {
      const speech = `${currentQuestion.narasi.stimulus}. ${currentQuestion.narasi.pertanyaan}`;
      tts.speak(speech, {
        rate: progress.settings.speechRate,
        volume: isMuted ? 0 : progress.settings.speechVolume,
      });
    }
    return () => {
      tts.stop();
    };
  }, [currentQIndex, currentView]);

  // Fullscreen Handler
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Font size toggle
  const handleCycleFontSize = () => {
    const nextSize =
      progress.settings.fontSize === 'normal'
        ? 'large'
        : progress.settings.fontSize === 'large'
        ? 'huge'
        : 'normal';

    setProgress(prev => ({
      ...prev,
      settings: { ...prev.settings, fontSize: nextSize },
    }));
  };

  // Mute toggle
  const handleToggleMute = () => {
    if (!isMuted) {
      tts.stop();
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  // Welcome Handler with required Indonesian Teacher Welcome Narration
  const handleStartLearning = (name: string) => {
    setProgress(prev => ({
      ...prev,
      studentName: name,
    }));
    setCurrentView('practice');

    const welcomeSpeech = `Halo, selamat datang di TKA Matematika Wajib bersama Mister Jo! Di sini, kita akan belajar matematika dengan cara yang berbeda. Bukan hanya menghafal rumus dan mencari jawaban, tetapi belajar berpikir, menganalisis informasi, dan menemukan strategi terbaik untuk menyelesaikan soal-soal penalaran. Mister Jo sudah menyiapkan tiga puluh soal menantang yang mencakup seluruh elemen penting TKA Matematika Wajib. Setiap soal dilengkapi stimulus, pembahasan langkah demi langkah, dan cara cepat yang bisa membantu kamu semakin mahir. Kalau jawabannya belum tepat, tidak masalah. Kita akan cari tahu alasannya dan pelajari konsepnya bersama. Kemajuan belajarmu juga akan tersimpan secara otomatis. Siapkan konsentrasimu, baca informasi dengan teliti, dan jangan takut menghadapi soal sulit. Yuk, kita mulai perjalanan dari pemula menuju ahli bersama Mister Jo!`;

    if (!isMuted) {
      tts.speak(welcomeSpeech, {
        rate: progress.settings.speechRate,
        volume: progress.settings.speechVolume,
      });
    }
  };

  const handleResumePractice = () => {
    setCurrentView('practice');
  };

  // Navigation handlers
  const handleGoToQuestion = (index: number) => {
    tts.stop();
    setProgress(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, Math.min(ALL_QUESTIONS.length - 1, index)),
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (currentQIndex < ALL_QUESTIONS.length - 1) {
      handleGoToQuestion(currentQIndex + 1);
    } else {
      // Reached the end: open results
      setIsDashboardOpen(true);
    }
  };

  const handlePrev = () => {
    if (currentQIndex > 0) {
      handleGoToQuestion(currentQIndex - 1);
    }
  };

  // Answer selection handlers
  const handleSelectOptionPG = (option: string) => {
    setProgress(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          selectedOption: option,
          isSubmitted: false,
          scoreCredit: 0,
          isCorrect: false,
        },
      },
    }));
  };

  const handleToggleOptionPGK = (option: string) => {
    const existing = progress.answers[currentQuestion.id]?.selectedOptions || [];
    const updated = existing.includes(option)
      ? existing.filter(o => o !== option)
      : [...existing, option];

    setProgress(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          selectedOptions: updated,
          isSubmitted: false,
          scoreCredit: 0,
          isCorrect: false,
        },
      },
    }));
  };

  const handleSelectStatementBS = (statementId: string, value: boolean) => {
    const existing = progress.answers[currentQuestion.id]?.statementAnswers || {};
    setProgress(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          statementAnswers: {
            ...existing,
            [statementId]: value,
          },
          isSubmitted: false,
          scoreCredit: 0,
          isCorrect: false,
        },
      },
    }));
  };

  // Submit Answer & Calculate Score
  const handleSubmitAnswer = () => {
    if (!currentAnswer) return;

    const credit = calculateItemCredit(currentQuestion, currentAnswer);
    const isPerfect = credit >= 0.99;

    const updatedAnswer: UserAnswer = {
      ...currentAnswer,
      isSubmitted: true,
      scoreCredit: credit,
      isCorrect: isPerfect,
      submittedAt: Date.now(),
    };

    setProgress(prev => {
      const nextAnswers = {
        ...prev.answers,
        [currentQuestion.id]: updatedAnswer,
      };
      const allSubmitted = ALL_QUESTIONS.every(q => nextAnswers[q.id]?.isSubmitted);
      return {
        ...prev,
        answers: nextAnswers,
        isCompleted: allSubmitted,
      };
    });

    // Confetti celebration if 100% correct
    if (isPerfect) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#dc2626', '#f59e0b', '#10b981', '#3b82f6'],
        });
      } catch {}
    }

    // Spoken feedback from Mister Jo
    if (!isMuted) {
      const feedback = isPerfect
        ? currentQuestion.narasi.umpanBalikBenar
        : currentQuestion.narasi.umpanBalikSalah;
      tts.speak(feedback, {
        rate: progress.settings.speechRate,
        volume: progress.settings.speechVolume,
      });
    }
  };

  // Reset Progress
  const handleConfirmReset = () => {
    clearUserProgress();
    setProgress({
      ...DEFAULT_PROGRESS,
      startedAt: Date.now(),
      lastActiveAt: Date.now(),
    });
    setCurrentView('welcome');
    tts.stop();
  };

  // Reading Triggers
  const handleReadStimulus = () => {
    const text = `${currentQuestion.narasi.stimulus}. ${currentQuestion.narasi.pertanyaan}`;
    tts.speak(text, {
      rate: progress.settings.speechRate,
      volume: isMuted ? 0 : progress.settings.speechVolume,
    });
  };

  const handleReadOptions = () => {
    if (currentQuestion.narasi.opsi) {
      tts.speak(currentQuestion.narasi.opsi, {
        rate: progress.settings.speechRate,
        volume: isMuted ? 0 : progress.settings.speechVolume,
      });
    }
  };

  const handleReadNormalExplanation = () => {
    const text = currentQuestion.narasi.pembahasanNormal;
    tts.speak(text, {
      rate: progress.settings.speechRate,
      volume: isMuted ? 0 : progress.settings.speechVolume,
    });
  };

  const handleReadFastExplanation = () => {
    const text = currentQuestion.narasi.pembahasanCepat;
    tts.speak(text, {
      rate: progress.settings.speechRate,
      volume: isMuted ? 0 : progress.settings.speechVolume,
    });
  };

  // Completed count
  const completedCount = Object.values(progress.answers).filter(a => a.isSubmitted).length;

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col justify-between selection:bg-red-500 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        studentName={progress.studentName}
        currentNumber={currentQuestion.nomor}
        totalQuestions={ALL_QUESTIONS.length}
        completedCount={completedCount}
        fontSize={progress.settings.fontSize}
        isFullscreen={isFullscreen}
        isMuted={isMuted}
        onToggleFullscreen={handleToggleFullscreen}
        onCycleFontSize={handleCycleFontSize}
        onToggleMute={handleToggleMute}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenDashboard={() => setIsDashboardOpen(true)}
        onOpenReset={() => setIsResetOpen(true)}
        onReturnHome={() => setCurrentView('welcome')}
      />

      {/* Main View Switching */}
      {currentView === 'welcome' ? (
        <WelcomeScreen
          progress={progress}
          onStartLearning={handleStartLearning}
          onResumePractice={handleResumePractice}
          onOpenGuide={() => setIsGuideOpen(true)}
          onOpenDashboard={() => setIsDashboardOpen(true)}
          onOpenDrawer={() => setIsDrawerOpen(true)}
        />
      ) : (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
          
          {/* Audio Player Toolbar */}
          <AudioPlayer
            currentNarration={`${currentQuestion.narasi.stimulus}. ${currentQuestion.narasi.pertanyaan}`}
            isAutoPlay={progress.settings.autoPlayAudio}
            speechRate={progress.settings.speechRate}
            speechVolume={progress.settings.speechVolume}
            onToggleAutoPlay={() =>
              setProgress(prev => ({
                ...prev,
                settings: {
                  ...prev.settings,
                  autoPlayAudio: !prev.settings.autoPlayAudio,
                },
              }))
            }
            onChangeRate={(rate) =>
              setProgress(prev => ({
                ...prev,
                settings: { ...prev.settings, speechRate: rate },
              }))
            }
            onChangeVolume={(vol) =>
              setProgress(prev => ({
                ...prev,
                settings: { ...prev.settings, speechVolume: vol },
              }))
            }
            onReadStimulus={handleReadStimulus}
            onReadOptions={handleReadOptions}
            onReadNormalExplanation={handleReadNormalExplanation}
            onReadFastExplanation={handleReadFastExplanation}
            hasSubmitted={currentAnswer?.isSubmitted}
          />

          {/* Interactive Question Card */}
          <QuestionCard
            question={currentQuestion}
            userAnswer={currentAnswer}
            fontSize={progress.settings.fontSize}
            onSelectOption={handleSelectOptionPG}
            onToggleOptionPGK={handleToggleOptionPGK}
            onSelectStatementBS={handleSelectStatementBS}
            onSubmitAnswer={handleSubmitAnswer}
          />

          {/* Explanation Card (Available on same page after answer submission) */}
          {currentAnswer?.isSubmitted && (
            <ExplanationCard
              question={currentQuestion}
              fontSize={progress.settings.fontSize}
              onPlayNormalTTS={handleReadNormalExplanation}
              onPlayFastTTS={handleReadFastExplanation}
              onNextQuestion={handleNext}
              hasNextQuestion={currentQIndex < ALL_QUESTIONS.length - 1}
            />
          )}

          {/* Bottom Navigation Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex items-center justify-between gap-3 mb-8">
            <button
              onClick={handlePrev}
              disabled={currentQIndex === 0}
              className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition ${
                currentQIndex > 0
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 cursor-pointer'
                  : 'bg-slate-50 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Soal Sebelumnya
            </button>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition cursor-pointer"
            >
              <Grid3X3 className="w-4 h-4" />
              <span className="hidden sm:inline">Soal</span> {currentQuestion.nomor} / 30
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm bg-red-600 hover:bg-red-700 text-white flex items-center gap-1.5 transition shadow-xs cursor-pointer active:scale-95"
            >
              {currentQIndex < ALL_QUESTIONS.length - 1 ? (
                <>
                  Soal Berikutnya
                  <ChevronRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  Lihat Skor Akhir
                  <BarChart3 className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

        </main>
      )}

      {/* Global Modals */}
      <QuestionDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        questions={ALL_QUESTIONS}
        currentIndex={currentQIndex}
        answers={progress.answers}
        onSelectQuestion={handleGoToQuestion}
      />

      <DashboardModal
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        questions={ALL_QUESTIONS}
        answers={progress.answers}
        studentName={progress.studentName}
      />

      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      <ResetConfirmModal
        isOpen={isResetOpen}
        onClose={() => setIsResetOpen(false)}
        onConfirmReset={handleConfirmReset}
      />

    </div>
  );
}
