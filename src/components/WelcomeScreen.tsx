import React, { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  HelpCircle, 
  BarChart3, 
  Settings2, 
  Sparkles, 
  BookOpen, 
  Trophy, 
  ShieldCheck, 
  CheckCircle2,
  Volume2
} from 'lucide-react';
import { UserProgress } from '../types';

interface WelcomeScreenProps {
  progress: UserProgress;
  onStartLearning: (studentName: string) => void;
  onResumePractice: () => void;
  onOpenGuide: () => void;
  onOpenDashboard: () => void;
  onOpenDrawer: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  progress,
  onStartLearning,
  onResumePractice,
  onOpenGuide,
  onOpenDashboard,
  onOpenDrawer,
}) => {
  const [nameInput, setNameInput] = useState(progress.studentName || '');
  const answeredCount = Object.values(progress.answers).filter(a => a.isSubmitted).length;
  const hasExistingProgress = answeredCount > 0;

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    onStartLearning(nameInput.trim() || 'Siswa Berprestasi');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-slate-50 flex flex-col justify-between">
      
      {/* Top Banner Branding */}
      <div className="w-full bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white py-3 px-4 text-center text-xs sm:text-sm font-bold shadow-xs">
        <span className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
          TKA Matematika Wajib SMA/MA Kelas XII — 30 Soal HOTS Penalaran Terstandar 2026
        </span>
      </div>

      {/* Main Hero Container */}
      <main className="max-w-5xl mx-auto px-4 py-8 sm:py-16 w-full flex-1 flex flex-col items-center justify-center text-center">
        
        {/* Mister Jo Avatar Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white border-2 border-red-200 shadow-sm mb-6 animate-in zoom-in duration-300">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 text-white flex items-center justify-center font-extrabold text-lg shadow-xs">
            MJ
          </div>
          <div className="text-left">
            <span className="text-xs font-black text-red-700 uppercase tracking-widest block">
              GURU PEMBIMBING
            </span>
            <span className="text-sm font-extrabold text-slate-900">
              Mister Jo
            </span>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-950 tracking-tight leading-none mb-4">
          MISTER JO
        </h1>
        <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-extrabold px-6 py-2 rounded-2xl text-lg sm:text-2xl shadow-md mb-6 transform -rotate-1">
          TKA MATEMATIKA WAJIB 2026
        </div>

        <p className="text-base sm:text-xl font-bold text-slate-800 italic max-w-2xl mb-8">
          "BERLATIH CERDAS, BERNALAR TAJAM, TAKLUKKAN TKA!"
        </p>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mb-8 leading-relaxed font-medium">
          Dua metode pembahasan pada setiap butir soal: <strong>Cara Normal 8 Tahap Runtut</strong> dan <strong>Cara Cepat Efisien</strong>, didampingi <strong>Narator Suara Bahasa Indonesia</strong> dan <strong>Estimasi Skor IRT Skala 200–800</strong>.
        </p>

        {/* Student Name Input & Start Form */}
        <form onSubmit={handleStart} className="w-full max-w-md bg-white p-6 sm:p-8 rounded-3xl border border-red-100 shadow-xl mb-10 text-left">
          <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
            Nama Siswa / Panggilan (Opsional):
          </label>
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Ketik namamu di sini..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-red-500 font-semibold text-slate-800 text-base mb-4 transition"
          />

          <div className="space-y-3">
            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-extrabold text-lg rounded-2xl shadow-lg hover:shadow-xl transition transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" />
              MULAI BELAJAR
            </button>

            {hasExistingProgress && (
              <button
                type="button"
                onClick={onResumePractice}
                className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-2xl shadow-md transition transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
                LANJUTKAN LATIHAN (Soal {progress.currentQuestionIndex + 1})
              </button>
            )}
          </div>
        </form>

        {/* Secondary Menu Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mb-12">
          <button
            onClick={onOpenGuide}
            className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-bold flex items-center gap-2 shadow-2xs transition"
          >
            <HelpCircle className="w-4 h-4 text-red-600" />
            PETUNJUK PENGGUNAAN
          </button>

          <button
            onClick={onOpenDashboard}
            className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-bold flex items-center gap-2 shadow-2xs transition"
          >
            <BarChart3 className="w-4 h-4 text-red-600" />
            PROGRES & SKOR SAYA
          </button>

          <button
            onClick={onOpenDrawer}
            className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-bold flex items-center gap-2 shadow-2xs transition"
          >
            <BookOpen className="w-4 h-4 text-red-600" />
            DAFTAR 30 SOAL
          </button>
        </div>

        {/* 5 Elemen Curriculum Badges */}
        <div className="w-full max-w-4xl pt-8 border-t border-slate-200">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
            Cakupan 5 Elemen Kemendikdasmen (Masing-masing 6 Soal):
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-bold text-slate-700">
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-red-700 block text-sm">6 Soal</span> Bilangan
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-red-700 block text-sm">6 Soal</span> Aljabar
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-red-700 block text-sm">6 Soal</span> Geometri
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-red-700 block text-sm">6 Soal</span> Trigonometri
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs col-span-2 sm:col-span-1">
              <span className="text-red-700 block text-sm">6 Soal</span> Data & Peluang
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-900 text-slate-400 py-6 px-4 text-center text-xs border-t border-slate-800">
        <p className="font-semibold text-slate-300 mb-1">
          Mister Jo — TKA Matematika Wajib SMA/MA 2026
        </p>
        <p className="text-slate-500">
          Dirancang untuk Interactive Flat Panel (IFP), Laptop, Tablet, dan Smartphone. 100% Client-Side & Offline Ready.
        </p>
      </footer>

    </div>
  );
};
