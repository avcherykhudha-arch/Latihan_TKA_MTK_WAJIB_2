import React, { useEffect } from 'react';
import { 
  X, 
  Trophy, 
  BarChart2, 
  Target, 
  CheckCircle2, 
  Sparkles, 
  Headphones, 
  RotateCcw,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';
import { IRTScoreResult, QuestionData, UserAnswer } from '../types';
import { calculateOverallAssessment } from '../utils/irtScoring';
import { tts } from '../utils/tts';

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: QuestionData[];
  answers: Record<string, UserAnswer>;
  studentName?: string;
}

export const DashboardModal: React.FC<DashboardModalProps> = ({
  isOpen,
  onClose,
  questions,
  answers,
  studentName = 'Siswa',
}) => {
  if (!isOpen) return null;

  const assessment: IRTScoreResult = calculateOverallAssessment(questions, answers);
  const progressPercent = Math.round((assessment.totalAnswered / assessment.totalQuestions) * 100);

  // Generate dynamic voice text for Mister Jo's feedback
  const summaryNarration = `Halo ${studentName}! Hasil analisis asesmen latihan TKA Matematika Wajib menunjukkan estimasi skor latihanmu mencapai ${assessment.scaleScore} dari rentang dua ratus sampai delapan ratus. Kamu telah menyelesaikan ${assessment.totalAnswered} dari tiga puluh butir soal. Kekuatan tertinggimu terlihat pada elemen ${assessment.strongestElement}, sedangkan area yang perlu diperkuat adalah ${assessment.weakestElement}. ${assessment.teacherRecommendation}`;

  const handleSpeakSummary = () => {
    tts.speak(summaryNarration);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10 relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition"
          aria-label="Tutup dashboard hasil belajar"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-amber-600 text-white flex items-center justify-center shadow-md">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Dashboard Analisis Belajar Siswa
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Simulasi IRT 2PL Skala 200–800 & Diagnostik Penguasaan 5 Elemen
            </p>
          </div>
        </div>

        {/* Top Highlight Cards: Large Score & Progress Ring */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* A. SKOR BESAR 200 - 800 */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-red-700 via-red-600 to-rose-700 text-white shadow-lg flex flex-col justify-between relative overflow-hidden md:col-span-2">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
                  {assessment.totalAnswered === 30 ? 'Skor Akhir Latihan' : 'Estimasi Skor Sementara'}
                </span>
                <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-xs">
                  Model 2PL IRT
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-6xl sm:text-7xl font-black tracking-tight">
                  {assessment.scaleScore}
                </span>
                <span className="text-lg font-bold text-red-100">/ 800</span>
              </div>
              <p className="text-xs text-red-100 mt-2 font-medium">
                Skor dihitung mempertimbangkan daya beda butir, tingkat kesulitan soal, dan kredit parsial.
              </p>
            </div>

            {/* Quick voice summary button */}
            <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between relative z-10">
              <span className="text-xs text-white/90">
                Nilai theta kemampuan: <strong className="font-mono text-amber-300">{assessment.estimatedTheta >= 0 ? `+${assessment.estimatedTheta.toFixed(2)}` : assessment.estimatedTheta.toFixed(2)}</strong>
              </span>
              <button
                onClick={handleSpeakSummary}
                className="px-3.5 py-1.5 bg-white text-red-700 hover:bg-red-50 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-xs transition active:scale-95"
              >
                <Headphones className="w-3.5 h-3.5" />
                Dengarkan Evaluasi
              </button>
            </div>
          </div>

          {/* B. PROGRESS RING */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center text-center">
            <div className="relative w-28 h-28 flex items-center justify-center mb-3">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="56"
                  cy="56"
                  r="46"
                  stroke="#e2e8f0"
                  strokeWidth="10"
                  fill="transparent"
                />
                <circle
                  cx="56"
                  cy="56"
                  r="46"
                  stroke="#dc2626"
                  strokeWidth="10"
                  strokeDasharray={2 * Math.PI * 46}
                  strokeDashoffset={2 * Math.PI * 46 * (1 - progressPercent / 100)}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-700"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-black text-slate-900">{progressPercent}%</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Selesai</span>
              </div>
            </div>
            <span className="text-xs font-bold text-slate-700">
              {assessment.totalAnswered} dari 30 Soal Terjawab
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              Benar Sempurna: {assessment.totalCorrect} Soal
            </span>
          </div>

        </div>

        {/* F. SARAN MISTER JO (Pedagogical Advice based on performance) */}
        <div className="p-6 rounded-3xl bg-amber-50/80 border-2 border-amber-200 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-black text-xl shadow-xs">
              👨‍🏫
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-extrabold text-slate-900 text-base">
                  Rekomendasi Belajar Personal dari Mister Jo
                </h4>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-200 text-amber-900">
                  Pedagogis
                </span>
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                "{assessment.teacherRecommendation}"
              </p>
            </div>
          </div>
        </div>

        {/* C. PETA PENGUASAAN 5 ELEMEN */}
        <div className="mb-8">
          <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
            <Target className="w-4 h-4 text-red-600" />
            Peta Penguasaan Berdasarkan 5 Elemen TKA Wajib
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {(Object.keys(assessment.elementPerformance) as (keyof typeof assessment.elementPerformance)[]).map((el) => {
              const data = assessment.elementPerformance[el];
              const isStrongest = el === assessment.strongestElement;
              const isWeakest = el === assessment.weakestElement;

              return (
                <div
                  key={el}
                  className={`p-4 rounded-2xl border transition ${
                    isStrongest
                      ? 'bg-emerald-50/70 border-emerald-300 ring-1 ring-emerald-300'
                      : isWeakest && data.total > 0
                      ? 'bg-rose-50/70 border-rose-200'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                      {el}
                      {isStrongest && (
                        <span className="text-[10px] font-bold bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded-md">
                          Terkuat
                        </span>
                      )}
                      {isWeakest && (
                        <span className="text-[10px] font-bold bg-rose-200 text-rose-900 px-1.5 py-0.5 rounded-md">
                          Perlu Latihan
                        </span>
                      )}
                    </span>
                    <span className="text-sm font-black text-slate-900">
                      {data.percentage}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isStrongest ? 'bg-emerald-500' : isWeakest ? 'bg-rose-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${data.percentage}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block font-medium">
                    Kredit: {data.correct.toFixed(1)} dari {data.total} soal
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* D & E: RINCIAN JENIS SOAL & TINGKAT KESULITAN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
          
          {/* D. Rincian Jenis Soal */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Performa Berdasarkan Bentuk Soal
            </h5>
            <div className="space-y-2">
              <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">Pilihan Ganda Biasa (10 Soal)</span>
                <span className="text-sm font-black text-slate-900">{assessment.categoryPerformance['PG'].percentage}%</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">Pilihan Ganda Kompleks (10 Soal)</span>
                <span className="text-sm font-black text-slate-900">{assessment.categoryPerformance['PGK'].percentage}%</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">Klasifikasi Benar-Salah (10 Soal)</span>
                <span className="text-sm font-black text-slate-900">{assessment.categoryPerformance['BS'].percentage}%</span>
              </div>
            </div>
          </div>

          {/* E. Tingkat Kesulitan */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Performa Berdasarkan Kesulitan
            </h5>
            <div className="space-y-2">
              <div className="p-3 bg-sky-50/70 border border-sky-100 rounded-xl flex items-center justify-between">
                <span className="text-xs font-bold text-sky-900">Level Menantang (6 Soal)</span>
                <span className="text-sm font-black text-sky-950">{assessment.difficultyPerformance['Menantang'].percentage}%</span>
              </div>
              <div className="p-3 bg-amber-50/70 border border-amber-100 rounded-xl flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900">Level Sulit (18 Soal)</span>
                <span className="text-sm font-black text-amber-950">{assessment.difficultyPerformance['Sulit'].percentage}%</span>
              </div>
              <div className="p-3 bg-rose-50/70 border border-rose-100 rounded-xl flex items-center justify-between">
                <span className="text-xs font-bold text-rose-900">Level Sangat Sulit (6 Soal)</span>
                <span className="text-sm font-black text-rose-950">{assessment.difficultyPerformance['Sangat Sulit'].percentage}%</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition"
          >
            Lanjutkan Latihan
          </button>
        </div>

      </div>
    </div>
  );
};
