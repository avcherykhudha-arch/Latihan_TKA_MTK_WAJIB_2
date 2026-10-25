import React from 'react';
import { 
  X, 
  HelpCircle, 
  CheckCircle, 
  Sparkles, 
  Headphones, 
  Layers, 
  CheckSquare, 
  Volume2, 
  BookOpen, 
  RotateCcw
} from 'lucide-react';
import { tts } from '../utils/tts';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const guideNarration = `Halo kawan-kawan! Ini adalah petunjuk penggunaan aplikasi TKA Matematika Wajib bersama Mister Jo. Pertama, kamu dapat memilih tiga puluh butir soal melalui tombol navigasi atau menu Daftar Soal. Baca stimulus dengan teliti karena setiap soal memuat informasi berharga. Untuk melihat gambar dengan detail, klik tombol Perbesar Gambar. Jawablah soal pilihan ganda biasa, pilihan ganda kompleks yang bisa dipilih lebih dari satu, atau klasifikasi tiga pernyataan benar salah. Setelah yakin, tekan Periksa Jawaban. Pembahasan lengkap delapan tahap dan cara cepat Mister Jo akan langsung terbuka di halaman yang sama. Seluruh progres dan nilaimu tersimpan otomatis di perangkat tanpa perlu internet. Yuk, berlatih cerdas dan bernalar tajam bersama Mister Jo!`;

  const handleSpeakGuide = () => {
    tts.speak(guideNarration);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition"
          aria-label="Tutup petunjuk"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-md">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Petunjuk & Manfaat Belajar
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Mister Jo — TKA Matematika Wajib 2026
              </p>
            </div>
          </div>

          <button
            onClick={handleSpeakGuide}
            className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs rounded-xl flex items-center gap-1.5 border border-red-200 transition"
          >
            <Headphones className="w-4 h-4" />
            Dengarkan Petunjuk
          </button>
        </div>

        {/* Section A: Petunjuk Penggunaan */}
        <div className="space-y-4 mb-8">
          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
            A. Alur dan Cara Penggunaan Aplikasi
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="font-extrabold text-slate-900 block mb-1">1. Memilih & Menavigasi Soal</span>
              <p className="text-slate-600 leading-relaxed">
                Pilih nomor 1–30 dari menu Daftar Soal atau gunakan tombol Kembali dan Selanjutnya.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="font-extrabold text-slate-900 block mb-1">2. Stimulus & Zoom Gambar</span>
              <p className="text-slate-600 leading-relaxed">
                Stimulus berupa tabel, fungsi, atau diagram. Klik tombol <strong>Perbesar</strong> untuk melihat detail geometri beresolusi tinggi.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="font-extrabold text-slate-900 block mb-1">3. Tiga Ragam Bentuk Soal</span>
              <p className="text-slate-600 leading-relaxed">
                • <strong>PG</strong>: 1 pilihan benar.<br />
                • <strong>PGK</strong>: Centang semua opsi yang benar.<br />
                • <strong>Benar-Salah</strong>: Klasifikasikan ketiga pernyataan.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="font-extrabold text-slate-900 block mb-1">4. Periksa Jawaban & Pembahasan</span>
              <p className="text-slate-600 leading-relaxed">
                Tekan <strong>PERIKSA JAWABAN</strong> untuk mengunci percobaan dan membuka Cara Normal (8 Tahap) serta Cara Cepat Mister Jo pada halaman yang sama.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="font-extrabold text-slate-900 block mb-1">5. Narator Suara Interaktif</span>
              <p className="text-slate-600 leading-relaxed">
                Gunakan kontrol audio untuk mendengarkan stimulus, opsi, serta narasi pembahasan cara normal dan cepat.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="font-extrabold text-slate-900 block mb-1">6. Penyimpanan Progres Otomatis</span>
              <p className="text-slate-600 leading-relaxed">
                Jawaban dan skor tersimpan otomatis di perangkatmu (offline). Kamu bisa melanjutkan kapan saja tanpa login.
              </p>
            </div>
          </div>
        </div>

        {/* Section B: Manfaat Pembelajaran */}
        <div className="p-5 bg-gradient-to-br from-red-50 to-amber-50 border border-red-200 rounded-3xl mb-6">
          <h3 className="text-sm font-extrabold text-red-950 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            B. Manfaat Belajar Bersama Mister Jo
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Melatih Daya Penalaran:</strong> Menghilangkan kebiasaan menghafal rumus mentah melalui pemodelan kontekstual.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Mengenali Distraktor:</strong> Memahami alasan mengapa opsi salah dirancang oleh pembuat soal.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Menemukan Cara Cepat Sah:</strong> Menguasai strategi efisien yang berlandaskan teorema matematis yang valid.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Estimasi Skor IRT Nyata:</strong> Mengetahui posisi kemampuan pada skala standar nasional 200–800.</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition"
          >
            Mengerti & Siap Berlatih
          </button>
        </div>

      </div>
    </div>
  );
};
