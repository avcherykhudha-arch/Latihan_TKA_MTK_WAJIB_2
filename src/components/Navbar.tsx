import React from 'react';
import { 
  Sparkles, 
  BarChart3, 
  HelpCircle, 
  RotateCcw, 
  Maximize, 
  Minimize, 
  Volume2, 
  VolumeX, 
  Grid3X3,
  CheckCircle2,
  Type
} from 'lucide-react';

interface NavbarProps {
  studentName: string;
  currentNumber: number;
  totalQuestions: number;
  completedCount: number;
  fontSize: 'normal' | 'large' | 'huge';
  isFullscreen: boolean;
  isMuted: boolean;
  onToggleFullscreen: () => void;
  onCycleFontSize: () => void;
  onToggleMute: () => void;
  onOpenDrawer: () => void;
  onOpenGuide: () => void;
  onOpenDashboard: () => void;
  onOpenReset: () => void;
  onReturnHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  studentName,
  currentNumber,
  totalQuestions,
  completedCount,
  fontSize,
  isFullscreen,
  isMuted,
  onToggleFullscreen,
  onCycleFontSize,
  onToggleMute,
  onOpenDrawer,
  onOpenGuide,
  onOpenDashboard,
  onOpenReset,
  onReturnHome
}) => {
  const fontSizeLabels = {
    normal: 'Font Normal',
    large: 'Font Besar',
    huge: 'Font Sangat Besar',
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-red-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Brand & Teacher Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={onReturnHome}
              className="flex items-center gap-3 text-left group focus:outline-hidden"
              title="Kembali ke Beranda"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 text-white flex items-center justify-center font-extrabold text-xl shadow-md group-hover:scale-105 transition transform">
                MJ
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg">
                    MISTER JO
                  </span>
                  <span className="px-2 py-0.5 text-xs font-bold bg-red-100 text-red-800 rounded-full border border-red-200">
                    TKA 2026
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium hidden sm:block">
                  TKA Matematika Wajib SMA/MA Kelas XII
                </p>
              </div>
            </button>
          </div>

          {/* Center Info: Auto-Save Badge & Quick Progress */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Progres tersimpan otomatis
            </div>

            <div className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
              Terjawab: <span className="font-bold text-slate-900">{completedCount}</span> / {totalQuestions}
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Daftar Soal 1-30 */}
            <button
              onClick={onOpenDrawer}
              className="p-2.5 sm:px-3 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition"
              title="Buka Daftar Soal 1–30"
              aria-label="Buka Daftar Soal"
            >
              <Grid3X3 className="w-4 h-4 text-slate-700" />
              <span className="hidden sm:inline">Daftar Soal</span>
            </button>

            {/* Hasil Belajar / Skor IRT */}
            <button
              onClick={onOpenDashboard}
              className="p-2.5 sm:px-3 sm:py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm hover:shadow transition"
              title="Lihat Estimasi Skor IRT dan Analisis Penguasaan"
              aria-label="Lihat Hasil Belajar"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Skor IRT</span>
            </button>

            {/* Font Size Toggle */}
            <button
              onClick={onCycleFontSize}
              className="p-2.5 sm:p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition relative"
              title={`Ubah ukuran font (Saat ini: ${fontSizeLabels[fontSize]})`}
              aria-label="Ubah ukuran font teks soal"
            >
              <Type className="w-5 h-5" />
              <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-slate-800 text-white px-1 rounded-sm">
                {fontSize === 'normal' ? '1x' : fontSize === 'large' ? '1.2x' : '1.4x'}
              </span>
            </button>

            {/* Audio Mute / Unmute */}
            <button
              onClick={onToggleMute}
              className={`p-2.5 sm:p-2 rounded-xl transition ${
                isMuted
                  ? 'text-rose-500 bg-rose-50 hover:bg-rose-100'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              title={isMuted ? 'Aktifkan Suara Narator' : 'Nonaktifkan Suara Narator'}
              aria-label={isMuted ? 'Suara narator nonaktif' : 'Suara narator aktif'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            {/* Fullscreen IFP */}
            <button
              onClick={onToggleFullscreen}
              className="p-2.5 sm:p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition hidden sm:flex"
              title={isFullscreen ? 'Keluar Layar Penuh' : 'Mode Layar Penuh (IFP)'}
              aria-label="Mode layar penuh"
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>

            {/* Guide Petunjuk */}
            <button
              onClick={onOpenGuide}
              className="p-2.5 sm:p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
              title="Petunjuk Penggunaan dan Manfaat"
              aria-label="Petunjuk Penggunaan"
            >
              <HelpCircle className="w-5 h-5" />
            </button>

            {/* Reset Progres */}
            <button
              onClick={onOpenReset}
              className="p-2.5 sm:p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
              title="Reset Progres Latihan"
              aria-label="Reset Progres Latihan"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
