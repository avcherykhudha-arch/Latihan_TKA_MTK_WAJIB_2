import React from 'react';
import { 
  Check, 
  X, 
  HelpCircle, 
  AlertCircle, 
  CheckCircle2, 
  Send,
  Layers,
  Award
} from 'lucide-react';
import { QuestionData, UserAnswer } from '../types';
import { MathText } from '../utils/mathRenderer';
import { MathDiagram } from './MathDiagram';

interface QuestionCardProps {
  question: QuestionData;
  userAnswer?: UserAnswer;
  fontSize: 'normal' | 'large' | 'huge';
  onSelectOption: (option: string) => void;
  onToggleOptionPGK: (option: string) => void;
  onSelectStatementBS: (statementId: string, value: boolean) => void;
  onSubmitAnswer: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  userAnswer,
  fontSize,
  onSelectOption,
  onToggleOptionPGK,
  onSelectStatementBS,
  onSubmitAnswer,
}) => {
  const isSubmitted = !!userAnswer?.isSubmitted;
  const scoreCredit = userAnswer?.scoreCredit ?? 0;

  // Font size scale multipliers
  const fontStyles = {
    normal: {
      title: 'text-2xl sm:text-3xl',
      stimulus: 'text-base sm:text-lg',
      question: 'text-lg sm:text-xl',
      option: 'text-base sm:text-lg',
      btn: 'text-base',
    },
    large: {
      title: 'text-3xl sm:text-4xl',
      stimulus: 'text-lg sm:text-xl',
      question: 'text-xl sm:text-2xl',
      option: 'text-lg sm:text-xl',
      btn: 'text-lg',
    },
    huge: {
      title: 'text-4xl sm:text-5xl',
      stimulus: 'text-xl sm:text-2xl',
      question: 'text-2xl sm:text-3xl',
      option: 'text-xl sm:text-2xl',
      btn: 'text-xl',
    },
  }[fontSize];

  // Element color styles
  const elementColors: Record<string, string> = {
    'Bilangan': 'bg-amber-100 text-amber-900 border-amber-300',
    'Aljabar': 'bg-blue-100 text-blue-900 border-blue-300',
    'Geometri dan Pengukuran': 'bg-emerald-100 text-emerald-900 border-emerald-300',
    'Trigonometri': 'bg-purple-100 text-purple-900 border-purple-300',
    'Data dan Peluang': 'bg-rose-100 text-rose-900 border-rose-300',
  };

  const difficultyColors = {
    'Menantang': 'bg-sky-50 text-sky-700 border-sky-200',
    'Sulit': 'bg-amber-50 text-amber-700 border-amber-200',
    'Sangat Sulit': 'bg-red-50 text-red-700 border-red-200',
  }[question.tingkatKesulitan];

  const typeLabels = {
    'PG': 'Pilihan Ganda Biasa (1 Pilihan Benar)',
    'PGK': 'Pilihan Ganda Kompleks (Pilih Semua yang Benar)',
    'BS': 'Klasifikasi Benar atau Salah (3 Pernyataan)',
  }[question.bentukSoal];

  // Check if answer is provided to enable submit button
  const canSubmit = () => {
    if (isSubmitted) return false;
    if (question.bentukSoal === 'PG') {
      return !!userAnswer?.selectedOption;
    }
    if (question.bentukSoal === 'PGK') {
      return (userAnswer?.selectedOptions?.length || 0) > 0;
    }
    if (question.bentukSoal === 'BS') {
      if (!userAnswer?.statementAnswers) return false;
      return (
        question.pernyataanBenarSalah?.every(
          (s) => userAnswer.statementAnswers?.[s.id] !== undefined
        ) || false
      );
    }
    return false;
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8 transition-all">
      
      {/* Question Header */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-50 via-red-50/20 to-slate-50 border-b border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold bg-red-600 text-white shadow-xs">
              SOAL {String(question.nomor).padStart(2, '0')}
            </span>
            <span className={`px-3 py-1 rounded-xl text-xs sm:text-sm font-bold border ${elementColors[question.elemen]}`}>
              {question.elemen}
            </span>
            <span className={`px-3 py-1 rounded-xl text-xs font-semibold border ${difficultyColors}`}>
              Tingkat {question.tingkatKesulitan}
            </span>
          </div>

          <div className="text-xs font-bold text-slate-500 bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-2xs">
            {typeLabels}
          </div>
        </div>

        <h2 className={`${fontStyles.title} font-extrabold text-slate-900 tracking-tight leading-snug`}>
          {question.judulSoal}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
          Indikator Asesmen: {question.indikator}
        </p>
      </div>

      {/* Stimulus Section */}
      <div className="p-6 sm:p-8 border-b border-slate-200 bg-slate-50/50">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
          <h3 className="font-bold text-slate-800 text-xs sm:text-sm uppercase tracking-wider">
            Stimulus & Informasi Penalaran
          </h3>
        </div>

        {/* Text Stimulus with LaTeX math */}
        <div className={`${fontStyles.stimulus} text-slate-800 leading-relaxed font-normal whitespace-pre-line`}>
          <MathText content={question.stimulus} as="div" />
        </div>

        {/* Visual Stimulus: SVG Diagram */}
        {question.visualData?.type === 'svg' && (
          <MathDiagram
            type={question.visualData.svgType}
            caption={question.visualData.caption}
            showExplanationOverlay={isSubmitted}
          />
        )}

        {/* Visual Stimulus: Data Table */}
        {question.visualData?.type === 'table' && question.visualData.tableData && (
          <div className="my-5 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
                <tr>
                  {question.visualData.tableData.headers.map((h, i) => (
                    <th key={i} className="px-4 py-3 border-r border-slate-200 last:border-r-0">
                      <MathText content={h} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {question.visualData.tableData.rows.map((row, rIndex) => (
                  <tr key={rIndex} className={rIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    {row.map((cell, cIndex) => (
                      <td key={cIndex} className="px-4 py-2.5 border-r border-slate-100 last:border-r-0 font-medium text-slate-700">
                        <MathText content={String(cell)} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {question.visualData.tableData.caption && (
              <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 italic text-center">
                {question.visualData.tableData.caption}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Question Prompt */}
      <div className="p-6 sm:p-8 bg-white border-b border-slate-200">
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-lg bg-red-100 text-red-800 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
            ?
          </div>
          <div className={`${fontStyles.question} font-bold text-slate-900 leading-snug`}>
            <MathText content={question.teksPertanyaan} as="p" />
          </div>
        </div>
      </div>

      {/* Options / Statements Zone */}
      <div className="p-6 sm:p-8 bg-slate-50/30">
        
        {/* A. Bentuk Pilihan Ganda Biasa (PG) */}
        {question.bentukSoal === 'PG' && question.opsiJawaban && (
          <div className="space-y-3">
            {question.opsiJawaban.map((opt) => {
              const isSelected = userAnswer?.selectedOption === opt.label;
              const isCorrectKey = question.kunciJawaban === opt.label;

              let cardStyle = 'bg-white border-slate-200 hover:border-red-400 hover:bg-red-50/30 text-slate-800';
              if (isSelected && !isSubmitted) {
                cardStyle = 'bg-red-50 border-red-500 ring-2 ring-red-400/40 text-red-950';
              } else if (isSubmitted) {
                if (isCorrectKey) {
                  cardStyle = 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-400/50 text-emerald-950';
                } else if (isSelected && !isCorrectKey) {
                  cardStyle = 'bg-rose-50 border-rose-400 ring-2 ring-rose-400/40 text-rose-950';
                } else {
                  cardStyle = 'bg-white border-slate-200 opacity-60 text-slate-600';
                }
              }

              return (
                <button
                  key={opt.label}
                  disabled={isSubmitted}
                  onClick={() => onSelectOption(opt.label)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center gap-4 cursor-pointer disabled:cursor-default ${cardStyle}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-base shrink-0 transition ${
                    isSelected
                      ? isSubmitted
                        ? isCorrectKey ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                        : 'bg-red-600 text-white'
                      : isSubmitted && isCorrectKey
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {isSubmitted && isCorrectKey ? (
                      <Check className="w-5 h-5 stroke-[3]" />
                    ) : isSubmitted && isSelected && !isCorrectKey ? (
                      <X className="w-5 h-5 stroke-[3]" />
                    ) : (
                      opt.label
                    )}
                  </div>
                  <div className={`${fontStyles.option} font-semibold flex-1`}>
                    <MathText content={opt.text} />
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* B. Bentuk Pilihan Ganda Kompleks (PGK) */}
        {question.bentukSoal === 'PGK' && question.opsiJawaban && (
          <div className="space-y-3">
            <div className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3.5 py-2 rounded-xl mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-700" />
              PILIHAN GANDA KOMPLEKS: Pilihlah semua opsi yang bernilai benar (bisa lebih dari satu).
            </div>
            {question.opsiJawaban.map((opt) => {
              const selectedList = userAnswer?.selectedOptions || [];
              const isSelected = selectedList.includes(opt.label);
              const correctKeys = Array.isArray(question.kunciJawaban)
                ? question.kunciJawaban
                : [question.kunciJawaban];
              const isCorrectKey = correctKeys.includes(opt.label);

              let cardStyle = 'bg-white border-slate-200 hover:border-red-400 hover:bg-red-50/30 text-slate-800';
              if (isSelected && !isSubmitted) {
                cardStyle = 'bg-red-50 border-red-500 ring-2 ring-red-400/40 text-red-950';
              } else if (isSubmitted) {
                if (isCorrectKey && isSelected) {
                  cardStyle = 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-400/50 text-emerald-950';
                } else if (isCorrectKey && !isSelected) {
                  cardStyle = 'bg-emerald-50/70 border-dashed border-emerald-400 text-emerald-900';
                } else if (!isCorrectKey && isSelected) {
                  cardStyle = 'bg-rose-50 border-rose-400 ring-2 ring-rose-400/40 text-rose-950';
                } else {
                  cardStyle = 'bg-white border-slate-200 opacity-60 text-slate-600';
                }
              }

              return (
                <button
                  key={opt.label}
                  disabled={isSubmitted}
                  onClick={() => onToggleOptionPGK(opt.label)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center gap-4 cursor-pointer disabled:cursor-default ${cardStyle}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 border-2 transition ${
                    isSelected
                      ? isSubmitted
                        ? isCorrectKey ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-rose-600 border-rose-600 text-white'
                        : 'bg-red-600 border-red-600 text-white'
                      : isSubmitted && isCorrectKey
                      ? 'bg-emerald-100 border-emerald-500 text-emerald-800'
                      : 'border-slate-300 text-slate-700 bg-white'
                  }`}>
                    {isSelected ? <Check className="w-5 h-5 stroke-[3]" /> : opt.label}
                  </div>
                  <div className={`${fontStyles.option} font-semibold flex-1`}>
                    <MathText content={opt.text} />
                  </div>
                  {isSubmitted && (
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md shrink-0">
                      {isCorrectKey ? (
                        <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-sm">BENAR</span>
                      ) : (
                        <span className="text-rose-700 bg-rose-100 px-2 py-0.5 rounded-sm">SALAH</span>
                      )}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* C. Bentuk Benar-Salah (BS) */}
        {question.bentukSoal === 'BS' && question.pernyataanBenarSalah && (
          <div className="space-y-4">
            <div className="text-xs font-bold text-sky-800 bg-sky-50 border border-sky-200 px-3.5 py-2 rounded-xl mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-700" />
              KLASIFIKASI: Tentukan apakah masing-masing dari 3 pernyataan berikut bernilai BENAR atau SALAH.
            </div>

            {question.pernyataanBenarSalah.map((stmt, idx) => {
              const currentChoice = userAnswer?.statementAnswers?.[stmt.id];
              const isMatch = currentChoice !== undefined && currentChoice === stmt.isCorrect;

              return (
                <div
                  key={stmt.id}
                  className={`p-5 rounded-2xl border-2 transition-all ${
                    isSubmitted
                      ? isMatch
                        ? 'bg-emerald-50/60 border-emerald-400'
                        : 'bg-rose-50/60 border-rose-300'
                      : currentChoice !== undefined
                      ? 'bg-white border-red-300'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <span className="w-7 h-7 rounded-full bg-slate-200 text-slate-800 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className={`${fontStyles.option} font-medium text-slate-900 leading-relaxed`}>
                        <MathText content={stmt.statement} />
                      </div>
                    </div>

                    {/* Toggle Buttons: BENAR vs SALAH */}
                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      <button
                        disabled={isSubmitted}
                        onClick={() => onSelectStatementBS(stmt.id, true)}
                        className={`px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition flex items-center gap-1.5 cursor-pointer disabled:cursor-default ${
                          currentChoice === true
                            ? isSubmitted
                              ? stmt.isCorrect
                                ? 'bg-emerald-600 text-white ring-2 ring-emerald-400'
                                : 'bg-rose-600 text-white ring-2 ring-rose-400'
                              : 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        <Check className="w-4 h-4" /> BENAR
                      </button>

                      <button
                        disabled={isSubmitted}
                        onClick={() => onSelectStatementBS(stmt.id, false)}
                        className={`px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition flex items-center gap-1.5 cursor-pointer disabled:cursor-default ${
                          currentChoice === false
                            ? isSubmitted
                              ? !stmt.isCorrect
                                ? 'bg-emerald-600 text-white ring-2 ring-emerald-400'
                                : 'bg-rose-600 text-white ring-2 ring-rose-400'
                              : 'bg-rose-600 text-white shadow-xs'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        <X className="w-4 h-4" /> SALAH
                      </button>
                    </div>
                  </div>

                  {/* Post-submit reason for each statement */}
                  {isSubmitted && (
                    <div className="mt-3 pt-3 border-t border-slate-200/80 text-xs text-slate-600 flex items-start gap-2">
                      <span className="font-bold text-slate-800 shrink-0">Alasan Kunci:</span>
                      <span>{stmt.reason}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Action Submit & Feedback Bar */}
      <div className="p-6 sm:p-8 bg-white border-t border-slate-200">
        {!isSubmitted ? (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              Pilih jawabanmu terlebih dahulu, lalu tekan tombol periksa untuk melihat analisis lengkap Mister Jo.
            </div>

            <button
              disabled={!canSubmit()}
              onClick={onSubmitAnswer}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl font-extrabold ${fontStyles.btn} flex items-center justify-center gap-2.5 shadow-md transition transform active:scale-95 cursor-pointer ${
                canSubmit()
                  ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white hover:shadow-lg'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              }`}
            >
              <Send className="w-5 h-5" />
              PERIKSA JAWABAN
            </button>
          </div>
        ) : (
          <div className="rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border transition animate-in fade-in"
               style={{
                 backgroundColor: scoreCredit === 1 ? '#f0fdf4' : scoreCredit > 0 ? '#fffbeb' : '#fff1f2',
                 borderColor: scoreCredit === 1 ? '#86efac' : scoreCredit > 0 ? '#fde68a' : '#fecdd3',
               }}>
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                scoreCredit === 1 ? 'bg-emerald-600 text-white' : scoreCredit > 0 ? 'bg-amber-500 text-white' : 'bg-rose-600 text-white'
              }`}>
                {scoreCredit === 1 ? (
                  <Award className="w-6 h-6" />
                ) : scoreCredit > 0 ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : (
                  <X className="w-6 h-6" />
                )}
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
                  {scoreCredit === 1
                    ? 'Luar Biasa! Jawabanmu Benar Sempurna (Kredit 100%)'
                    : scoreCredit > 0
                    ? `Bagus! Jawaban Sebagian Benar (Kredit ${Math.round(scoreCredit * 100)}%)`
                    : 'Jawaban Belum Tepat (Kredit 0%)'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  {scoreCredit === 1
                    ? 'Penalaranmu sangat tepat! Simak juga cara cepat di bawah untuk menambah teknik efisien.'
                    : 'Jangan berkecil hati. Pelajari pembahasan 8 tahap dan cara cepat bersama Mister Jo di bawah ini!'}
                </p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider">Perolehan Kredit</span>
              <span className="text-2xl font-black text-slate-900">
                {scoreCredit.toFixed(2)} / 1.00
              </span>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
