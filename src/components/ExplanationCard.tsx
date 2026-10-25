import React, { useState } from 'react';
import { 
  BookOpen, 
  Zap, 
  Headphones, 
  Lightbulb, 
  CheckCircle, 
  AlertTriangle, 
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { QuestionData } from '../types';
import { MathText } from '../utils/mathRenderer';

interface ExplanationCardProps {
  question: QuestionData;
  fontSize: 'normal' | 'large' | 'huge';
  onPlayNormalTTS: () => void;
  onPlayFastTTS: () => void;
  onNextQuestion: () => void;
  hasNextQuestion: boolean;
}

export const ExplanationCard: React.FC<ExplanationCardProps> = ({
  question,
  fontSize,
  onPlayNormalTTS,
  onPlayFastTTS,
  onNextQuestion,
  hasNextQuestion,
}) => {
  const [activeTab, setActiveTab] = useState<'normal' | 'cepat'>('normal');

  const fontStyles = {
    normal: 'text-base sm:text-lg',
    large: 'text-lg sm:text-xl',
    huge: 'text-xl sm:text-2xl',
  }[fontSize];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden mb-12 animate-in fade-in slide-in-from-bottom-6 duration-300">
      
      {/* Header Tabs */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-red-950 p-6 sm:p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-amber-400 flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Pembimbingan Mandiri Mister Jo
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Pembahasan Menyeluruh & Kunci Jawaban
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={activeTab === 'normal' ? onPlayNormalTTS : onPlayFastTTS}
              className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition active:scale-95"
            >
              <Headphones className="w-4 h-4" />
              Dengarkan {activeTab === 'normal' ? 'Cara Normal' : 'Cara Cepat'}
            </button>
          </div>
        </div>

        {/* Tab Toggle: Cara Normal vs Cara Cepat */}
        <div className="flex p-1.5 bg-slate-800/80 rounded-2xl max-w-md border border-slate-700/60">
          <button
            onClick={() => setActiveTab('normal')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition ${
              activeTab === 'normal'
                ? 'bg-white text-slate-900 shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-600" />
            Cara Normal (8 Tahap)
          </button>

          <button
            onClick={() => setActiveTab('cepat')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition ${
              activeTab === 'cepat'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-900 fill-current" />
            Cara Cepat Mister Jo
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="p-6 sm:p-10">
        
        {/* TAB 1: CARA NORMAL (8 TAHAP SISTEMATIS) */}
        {activeTab === 'normal' && (
          <div className="space-y-6">
            
            {/* Tahap 1: Memahami */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-red-600 text-white text-xs flex items-center justify-center">1</span>
                TAHAP 1 — MEMAHAMI PERSOALAN
              </h4>
              <div className={`${fontStyles} text-slate-700 leading-relaxed font-normal`}>
                <MathText content={question.pembahasanNormal.tahap1_memahami} />
              </div>
            </div>

            {/* Tahap 2: Menentukan Model */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-red-600 text-white text-xs flex items-center justify-center">2</span>
                TAHAP 2 — MENENTUKAN MODEL MATEMATIS
              </h4>
              <div className={`${fontStyles} text-slate-700 leading-relaxed font-normal whitespace-pre-line`}>
                <MathText content={question.pembahasanNormal.tahap2_model} />
              </div>
            </div>

            {/* Tahap 3: Menentukan Strategi */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-red-600 text-white text-xs flex items-center justify-center">3</span>
                TAHAP 3 — MENENTUKAN STRATEGI PENYELESAIAN
              </h4>
              <div className={`${fontStyles} text-slate-700 leading-relaxed font-normal`}>
                <MathText content={question.pembahasanNormal.tahap3_strategi} />
              </div>
            </div>

            {/* Tahap 4: Menyelesaikan Runtut */}
            <div className="p-6 rounded-2xl bg-red-50/40 border-2 border-red-200">
              <h4 className="text-sm font-extrabold text-red-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-lg bg-red-600 text-white text-xs flex items-center justify-center">4</span>
                TAHAP 4 — LANGKAH PENYELESAIAN MATEMATIS
              </h4>
              <div className={`${fontStyles} text-slate-800 leading-relaxed font-normal whitespace-pre-line`}>
                <MathText content={question.pembahasanNormal.tahap4_penyelesaian} />
              </div>
            </div>

            {/* Tahap 5: Verifikasi Bukti */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-red-600 text-white text-xs flex items-center justify-center">5</span>
                TAHAP 5 — MEMVERIFIKASI HASIL DENGAN METODE ALTERNATIF
              </h4>
              <div className={`${fontStyles} text-slate-700 leading-relaxed font-normal`}>
                <MathText content={question.pembahasanNormal.tahap5_verifikasi} />
              </div>
            </div>

            {/* Tahap 6: Evaluasi Opsi Pengecoh */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-red-600 text-white text-xs flex items-center justify-center">6</span>
                TAHAP 6 — MENGEVALUASI SEMUA OPSI & DISTRAKTOR
              </h4>
              <div className={`${fontStyles} text-slate-700 leading-relaxed font-normal whitespace-pre-line`}>
                <MathText content={question.pembahasanNormal.tahap6_evaluasiOpsi} />
              </div>
            </div>

            {/* Tahap 7: Kesimpulan Final */}
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300">
              <h4 className="text-sm font-extrabold text-emerald-950 flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-700 text-white text-xs flex items-center justify-center">7</span>
                TAHAP 7 — MENARIK KESIMPULAN JAWABAN
              </h4>
              <div className={`${fontStyles} text-emerald-900 font-bold leading-relaxed`}>
                <MathText content={question.pembahasanNormal.tahap7_kesimpulan} />
              </div>
            </div>

            {/* Tahap 8: Refleksi Konsep */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-300">
              <h4 className="text-sm font-extrabold text-amber-950 flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-amber-600 text-white text-xs flex items-center justify-center">8</span>
                TAHAP 8 — REFLEKSI & PELAJARAN PENTING MISTER JO
              </h4>
              <div className={`${fontStyles} text-amber-900 font-medium leading-relaxed`}>
                <MathText content={question.pembahasanNormal.tahap8_refleksi} />
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: CARA CEPAT MISTER JO */}
        {activeTab === 'cepat' && (
          <div className="space-y-6">
            
            {/* Card Highlight Strategi Cepat */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-50 via-amber-100/50 to-orange-50 border-2 border-amber-300 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-amber-950">
                    STRATEGI INTI CARA CEPAT
                  </h4>
                  <p className="text-xs text-amber-800 font-bold">
                    Pangkas waktu pengerjaan tanpa spekulasi yang keliru
                  </p>
                </div>
              </div>

              <p className={`${fontStyles} text-amber-950 font-bold leading-relaxed`}>
                {question.pembahasanCepat.strategiInti}
              </p>
            </div>

            {/* Langkah Kilat */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-red-600" />
                Langkah Eksekusi Cepat
              </h4>
              <div className={`${fontStyles} text-slate-800 leading-relaxed font-normal whitespace-pre-line`}>
                <MathText content={question.pembahasanCepat.langkahPengerjaan} />
              </div>
            </div>

            {/* Alasan Matematis Mengapa Cara Cepat Bekerja */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Landasan Teorema / Alasan Matematis Mengapa Sah
              </h4>
              <div className="text-sm text-slate-700 leading-relaxed font-medium">
                <MathText content={question.pembahasanCepat.alasanMatematis} />
              </div>
            </div>

            {/* Hasil Akhir & Perbandingan Efisiensi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                <span className="text-xs font-bold text-emerald-800 uppercase block mb-1">
                  Hasil Akhir Terverifikasi
                </span>
                <span className="text-lg font-extrabold text-emerald-950">
                  {question.pembahasanCepat.hasilAkhir}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">
                <span className="text-xs font-bold text-blue-800 uppercase block mb-1">
                  Efisiensi Waktu vs Cara Normal
                </span>
                <span className="text-sm font-bold text-blue-950 leading-snug block">
                  {question.pembahasanCepat.perbandinganEfisiensi}
                </span>
              </div>
            </div>

          </div>
        )}

        {/* Konsep Kunci Bottom Banner */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Konsep Kunci TKA 2026:</span>
              <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                {question.konsepPenting}
              </p>
            </div>
          </div>

          {/* Next Button */}
          {hasNextQuestion && (
            <button
              onClick={onNextQuestion}
              className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-sm transition active:scale-95 shrink-0"
            >
              Soal Berikutnya
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
