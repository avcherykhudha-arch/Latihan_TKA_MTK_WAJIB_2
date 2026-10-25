import React, { useState } from 'react';
import { 
  X, 
  Check, 
  AlertCircle, 
  Clock, 
  Filter,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { QuestionData, UserAnswer, ElementType } from '../types';

interface QuestionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  questions: QuestionData[];
  currentIndex: number;
  answers: Record<string, UserAnswer>;
  onSelectQuestion: (index: number) => void;
}

export const QuestionDrawer: React.FC<QuestionDrawerProps> = ({
  isOpen,
  onClose,
  questions,
  currentIndex,
  answers,
  onSelectQuestion,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | ElementType>('All');

  if (!isOpen) return null;

  const elements: ('All' | ElementType)[] = [
    'All',
    'Bilangan',
    'Aljabar',
    'Geometri dan Pengukuran',
    'Trigonometri',
    'Data dan Peluang',
  ];

  const filteredQuestions = questions.filter(
    (q) => selectedFilter === 'All' || q.elemen === selectedFilter
  );

  const getQuestionStatus = (q: QuestionData, index: number) => {
    const ans = answers[q.id];
    const isCurrent = index === currentIndex;

    if (!ans || !ans.isSubmitted) {
      if (isCurrent) return { label: 'Sedang Dikerjakan', style: 'border-2 border-red-500 bg-red-50 text-red-900 font-bold', icon: 'current' };
      return { label: 'Belum Dikerjakan', style: 'border border-slate-200 bg-white text-slate-700 hover:border-slate-400', icon: 'empty' };
    }

    if (ans.scoreCredit >= 0.99) {
      return { label: 'Selesai Benar', style: 'border-2 border-emerald-500 bg-emerald-50 text-emerald-950 font-bold', icon: 'correct' };
    }

    if (ans.scoreCredit > 0) {
      return { label: 'Sebagian Benar', style: 'border-2 border-amber-500 bg-amber-50 text-amber-950 font-bold', icon: 'partial' };
    }

    return { label: 'Selesai Salah', style: 'border-2 border-rose-400 bg-rose-50 text-rose-950 font-bold', icon: 'wrong' };
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white w-full max-w-lg h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-xl text-slate-900">
              Daftar 30 Soal TKA 2026
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Navigasi instan dengan indikator status dan warna
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition"
            aria-label="Tutup daftar soal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Legend */}
        <div className="px-6 py-3 bg-white border-b border-slate-100 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-600">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-slate-200 inline-block border border-slate-300"></span> Belum
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span> Aktif
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span> Benar (1.0)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span> Parsial
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span> Salah (0.0)
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="px-6 py-3 border-b border-slate-100 overflow-x-auto flex gap-1.5 scrollbar-none">
          {elements.map((el) => (
            <button
              key={el}
              onClick={() => setSelectedFilter(el)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedFilter === el
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {el === 'All' ? 'Semua (30)' : el}
            </button>
          ))}
        </div>

        {/* Question Numbers Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-5 gap-3">
            {filteredQuestions.map((q) => {
              const originalIndex = questions.findIndex((orig) => orig.id === q.id);
              const status = getQuestionStatus(q, originalIndex);

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onSelectQuestion(originalIndex);
                    onClose();
                  }}
                  className={`h-16 rounded-2xl flex flex-col items-center justify-center relative transition transform active:scale-95 cursor-pointer ${status.style}`}
                  title={`Soal ${q.nomor}: ${q.elemen} (${q.bentukSoal}) - ${status.label}`}
                >
                  <span className="text-base font-black">
                    {String(q.nomor).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-tighter opacity-80">
                    {q.bentukSoal}
                  </span>

                  {status.icon === 'correct' && (
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  )}
                  {status.icon === 'partial' && (
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-amber-500" />
                  )}
                  {status.icon === 'wrong' && (
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-rose-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm rounded-xl transition"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
