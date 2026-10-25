import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Square, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Settings2, 
  Sparkles, 
  Headphones, 
  MessageSquare
} from 'lucide-react';
import { tts, TTSState } from '../utils/tts';

interface AudioPlayerProps {
  currentNarration: string;
  isAutoPlay: boolean;
  speechRate: number;
  speechVolume: number;
  onToggleAutoPlay: () => void;
  onChangeRate: (rate: number) => void;
  onChangeVolume: (volume: number) => void;
  onReadStimulus: () => void;
  onReadOptions?: () => void;
  onReadNormalExplanation?: () => void;
  onReadFastExplanation?: () => void;
  hasSubmitted?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  currentNarration,
  isAutoPlay,
  speechRate,
  speechVolume,
  onToggleAutoPlay,
  onChangeRate,
  onChangeVolume,
  onReadStimulus,
  onReadOptions,
  onReadNormalExplanation,
  onReadFastExplanation,
  hasSubmitted = false,
}) => {
  const [ttsState, setTtsState] = useState<TTSState>({
    isPlaying: false,
    isPaused: false,
    currentText: '',
    voiceName: '',
  });
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    tts.subscribe(setTtsState);
  }, []);

  const handlePlayPause = () => {
    if (ttsState.isPlaying) {
      if (ttsState.isPaused) {
        tts.resume();
      } else {
        tts.pause();
      }
    } else {
      if (currentNarration) {
        tts.speak(currentNarration, { rate: speechRate, volume: speechVolume });
      } else {
        onReadStimulus();
      }
    }
  };

  const handleStop = () => {
    tts.stop();
  };

  return (
    <div className="bg-gradient-to-r from-red-50 via-white to-red-50 border border-red-200 rounded-2xl p-4 shadow-xs mb-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Mister Jo Avatar & Status */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-red-600 via-red-700 to-amber-700 p-0.5 shadow-md">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center overflow-hidden">
                <span className="text-2xl" role="img" aria-label="Mister Jo">
                  👨‍🏫
                </span>
              </div>
            </div>
            {ttsState.isPlaying && !ttsState.isPaused && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 border-2 border-white"></span>
              </span>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                Narator Mister Jo
              </h3>
              {ttsState.isPlaying && !ttsState.isPaused && (
                <span className="text-[11px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full flex items-center gap-1 animate-pulse">
                  <Headphones className="w-3 h-3" /> Sedang Menjelaskan...
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 font-medium">
              {ttsState.isPaused
                ? 'Suara dijeda sementara'
                : ttsState.isPlaying
                ? 'Dengarkan bimbingan penalaran langsung'
                : 'Siap membimbing penalaran langkah demi langkah'}
            </p>
          </div>
        </div>

        {/* Primary Playback Controls */}
        <div className="flex items-center flex-wrap gap-2 justify-center">
          
          {/* Main Play / Pause Button */}
          <button
            onClick={handlePlayPause}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition transform active:scale-95 ${
              ttsState.isPlaying && !ttsState.isPaused
                ? 'bg-amber-600 hover:bg-amber-700 text-white'
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
            aria-label={ttsState.isPlaying && !ttsState.isPaused ? 'Jeda suara' : 'Putar suara Mister Jo'}
          >
            {ttsState.isPlaying && !ttsState.isPaused ? (
              <>
                <Pause className="w-4 h-4" /> Jeda
              </>
            ) : ttsState.isPaused ? (
              <>
                <Play className="w-4 h-4 fill-current" /> Lanjutkan
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" /> Dengarkan Soal
              </>
            )}
          </button>

          {/* Stop Button */}
          {ttsState.isPlaying && (
            <button
              onClick={handleStop}
              className="p-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold flex items-center gap-1 transition"
              title="Hentikan narasi suara"
              aria-label="Hentikan suara"
            >
              <Square className="w-4 h-4 fill-current" />
            </button>
          )}

          {/* Quick Trigger: Bacakan Pilihan Jawaban */}
          {onReadOptions && !hasSubmitted && (
            <button
              onClick={onReadOptions}
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center gap-1.5"
              title="Bacakan seluruh pilihan opsi jawaban"
              aria-label="Bacakan opsi jawaban"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Bacakan Opsi
            </button>
          )}

          {/* Quick Triggers After Submission: Cara Normal & Cepat */}
          {hasSubmitted && onReadNormalExplanation && (
            <button
              onClick={onReadNormalExplanation}
              className="px-3 py-2 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-bold transition flex items-center gap-1.5"
              title="Dengarkan narasi Pembahasan Cara Normal 8 Tahap"
            >
              <Headphones className="w-3.5 h-3.5" />
              Cara Normal
            </button>
          )}

          {hasSubmitted && onReadFastExplanation && (
            <button
              onClick={onReadFastExplanation}
              className="px-3 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold transition flex items-center gap-1.5"
              title="Dengarkan narasi Pembahasan Cara Cepat Mister Jo"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              Cara Cepat
            </button>
          )}

          {/* TTS Settings Toggle */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`p-2.5 rounded-xl border transition ${
              showSettings
                ? 'bg-red-100 border-red-300 text-red-800'
                : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-600'
            }`}
            title="Pengaturan Suara Narator"
            aria-label="Pengaturan Suara Narator"
          >
            <Settings2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Expandable Settings Drawer */}
      {showSettings && (
        <div className="mt-4 pt-4 border-t border-red-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {/* Kecepatan */}
          <div>
            <label className="font-bold text-slate-700 block mb-1.5">
              Kecepatan Suara: {speechRate}x
            </label>
            <div className="flex gap-1.5">
              {[0.8, 1.0, 1.2].map(r => (
                <button
                  key={r}
                  onClick={() => onChangeRate(r)}
                  className={`flex-1 py-1.5 px-2 rounded-lg font-bold border transition ${
                    speechRate === r
                      ? 'bg-red-600 text-white border-red-600'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {r}x
                </button>
              ))}
            </div>
          </div>

          {/* Volume */}
          <div>
            <label className="font-bold text-slate-700 block mb-1.5">
              Volume Suara: {Math.round(speechVolume * 100)}%
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={speechVolume}
              onChange={(e) => onChangeVolume(parseFloat(e.target.value))}
              className="w-full accent-red-600 cursor-pointer"
            />
          </div>

          {/* Auto-Play Toggle */}
          <div className="flex flex-col justify-end">
            <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-700 py-1">
              <input
                type="checkbox"
                checked={isAutoPlay}
                onChange={onToggleAutoPlay}
                className="w-4 h-4 accent-red-600 rounded"
              />
              Bacakan otomatis saat ganti soal
            </label>
          </div>
        </div>
      )}

      {/* Live Transcript Box */}
      {ttsState.isPlaying && ttsState.currentText && (
        <div className="mt-3 p-3 bg-white/80 border border-red-100 rounded-xl text-xs text-slate-700 leading-relaxed shadow-2xs">
          <span className="font-bold text-red-700 mr-1.5">Naskah Mister Jo:</span>
          "{ttsState.currentText}"
        </div>
      )}
    </div>
  );
};
