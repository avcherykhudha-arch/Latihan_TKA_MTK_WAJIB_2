import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface ResetConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmReset: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirmReset,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-rose-100 text-center relative animate-in zoom-in-95 duration-200">
        <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <h3 className="text-xl font-black text-slate-900 mb-2">
          Reset Progres Latihan?
        </h3>
        
        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
          Apakah kamu yakin ingin menghapus seluruh progres latihan? Jawaban, skor, dan riwayat latihan saat ini akan dihapus dan dimulai kembali dari keadaan awal.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-sm transition"
          >
            BATAL
          </button>
          
          <button
            onClick={() => {
              onConfirmReset();
              onClose();
            }}
            className="flex-1 py-3 px-5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm shadow-md transition active:scale-95 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            YA, RESET PROGRES
          </button>
        </div>
      </div>
    </div>
  );
};
