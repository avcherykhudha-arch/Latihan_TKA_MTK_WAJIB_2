export interface TTSState {
  isPlaying: boolean;
  isPaused: boolean;
  currentText: string;
  voiceName: string;
}

/**
 * Translates math notation and code markers into clean natural spoken Indonesian.
 */
export function cleanTextForSpeech(text: string): string {
  if (!text) return '';

  let spoken = text;

  // Clean markdown bold, italic, code
  spoken = spoken.replace(/\*\*(.*?)\*\*/g, '$1');
  spoken = spoken.replace(/\*(.*?)\*/g, '$1');
  spoken = spoken.replace(/`([^`]+)`/g, '$1');

  // Fractions: \frac{a}{b} -> "a per b"
  spoken = spoken.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 per $2');

  // Roots: \sqrt[n]{x} -> "akar pangkat n dari x", \sqrt{x} -> "akar x"
  spoken = spoken.replace(/\\sqrt\[([^\]]+)\]\{([^}]+)\}/g, 'akar pangkat $1 dari $2');
  spoken = spoken.replace(/\\sqrt\{([^}]+)\}/g, 'akar dari $1');
  spoken = spoken.replace(/√([0-9a-zA-Z]+)/g, 'akar $1');

  // Exponents: x^{2} or x^2 -> "x kuadrat", x^3 -> "x pangkat tiga", x^{n} -> "x pangkat n"
  spoken = spoken.replace(/([a-zA-Z0-9]+)\^{2}/g, '$1 kuadrat');
  spoken = spoken.replace(/([a-zA-Z0-9]+)\^2/g, '$1 kuadrat');
  spoken = spoken.replace(/([a-zA-Z0-9]+)\^{3}/g, '$1 pangkat tiga');
  spoken = spoken.replace(/([a-zA-Z0-9]+)\^3/g, '$1 pangkat tiga');
  spoken = spoken.replace(/([a-zA-Z0-9]+)\^{([^}]+)\}/g, '$1 pangkat $2');
  spoken = spoken.replace(/([a-zA-Z0-9]+)\^([0-9a-zA-Z]+)/g, '$1 pangkat $2');
  spoken = spoken.replace(/²([a-zA-Z0-9]*)/g, ' kuadrat $1');
  spoken = spoken.replace(/³([a-zA-Z0-9]*)/g, ' kubik $1');

  // Subscripts: x_{1} -> "x satu"
  spoken = spoken.replace(/([a-zA-Z]+)_\{([^}]+)\}/g, '$1 $2');
  spoken = spoken.replace(/([a-zA-Z]+)_([0-9a-zA-Z]+)/g, '$1 $2');

  // Common math symbols
  spoken = spoken.replace(/\\sin/g, 'sinus');
  spoken = spoken.replace(/\\cos/g, 'kosinus');
  spoken = spoken.replace(/\\tan/g, 'tangen');
  spoken = spoken.replace(/\\cot/g, 'kotangen');
  spoken = spoken.replace(/\\sec/g, 'sekan');
  spoken = spoken.replace(/\\csc/g, 'kosekan');
  spoken = spoken.replace(/\\theta/g, 'teta');
  spoken = spoken.replace(/\\alpha/g, 'alfa');
  spoken = spoken.replace(/\\beta/g, 'beta');
  spoken = spoken.replace(/\\pi/g, 'pi');
  spoken = spoken.replace(/\\times/g, 'kali');
  spoken = spoken.replace(/\\cdot/g, 'kali');
  spoken = spoken.replace(/\\div/g, 'bagi');
  spoken = spoken.replace(/\\leq/g, 'kurang dari atau sama dengan');
  spoken = spoken.replace(/\\le/g, 'kurang dari atau sama dengan');
  spoken = spoken.replace(/\\geq/g, 'lebih dari atau sama dengan');
  spoken = spoken.replace(/\\ge/g, 'lebih dari atau sama dengan');
  spoken = spoken.replace(/\\neq/g, 'tidak sama dengan');
  spoken = spoken.replace(/\\approx/g, 'kira-kira');
  spoken = spoken.replace(/\\pm/g, 'plus minus');
  spoken = spoken.replace(/\\cap/g, 'irisan');
  spoken = spoken.replace(/\\cup/g, 'gabungan');
  spoken = spoken.replace(/\\in/g, 'anggota dari');
  spoken = spoken.replace(/\\infty/g, 'tak hingga');

  // Function notation f(x)
  spoken = spoken.replace(/f\(x\)/g, 'fungsi ef dari eks');
  spoken = spoken.replace(/g\(x\)/g, 'fungsi ge dari eks');
  spoken = spoken.replace(/h\(x\)/g, 'fungsi ha dari eks');
  spoken = spoken.replace(/P\(A\)/g, 'peluang kejadian A');
  spoken = spoken.replace(/P\(B\)/g, 'peluang kejadian B');

  // Remove leftover latex slashes and dollar signs
  spoken = spoken.replace(/\\\w+/g, '');
  spoken = spoken.replace(/[\$\{\}]/g, ' ');
  spoken = spoken.replace(/\s+/g, ' ').trim();

  return spoken;
}

class TTSEngine {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private voice: SpeechSynthesisVoice | null = null;
  private onStateChange: ((state: TTSState) => void) | null = null;
  private state: TTSState = {
    isPlaying: false,
    isPaused: false,
    currentText: '',
    voiceName: '',
  };

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  public subscribe(cb: (state: TTSState) => void) {
    this.onStateChange = cb;
    cb(this.state);
  }

  private updateState(partial: Partial<TTSState>) {
    this.state = { ...this.state, ...partial };
    if (this.onStateChange) {
      this.onStateChange(this.state);
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prioritize id-ID voice
    const indonesianVoice = voices.find(
      v => v.lang.toLowerCase().startsWith('id') || v.name.toLowerCase().includes('indonesia')
    );

    if (indonesianVoice) {
      this.voice = indonesianVoice;
      this.updateState({ voiceName: indonesianVoice.name });
    } else if (voices.length > 0) {
      // Fallback
      this.voice = voices[0];
      this.updateState({ voiceName: voices[0].name });
    }
  }

  public speak(
    rawText: string,
    options?: {
      rate?: number;
      volume?: number;
      onEnd?: () => void;
      onError?: (err: any) => void;
    }
  ) {
    if (!this.synth) {
      options?.onEnd?.();
      return;
    }

    this.stop();

    const spokenText = cleanTextForSpeech(rawText);
    if (!spokenText) {
      options?.onEnd?.();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(spokenText);
    if (this.voice) {
      utterance.voice = this.voice;
      utterance.lang = this.voice.lang || 'id-ID';
    } else {
      utterance.lang = 'id-ID';
    }

    utterance.rate = options?.rate ?? 1.0;
    utterance.volume = options?.volume ?? 1.0;
    utterance.pitch = 1.05; // Slightly warmer and clearer pitch for Mister Jo

    utterance.onstart = () => {
      this.updateState({
        isPlaying: true,
        isPaused: false,
        currentText: rawText,
      });
    };

    utterance.onend = () => {
      this.currentUtterance = null;
      this.updateState({
        isPlaying: false,
        isPaused: false,
        currentText: '',
      });
      options?.onEnd?.();
    };

    utterance.onerror = (e) => {
      this.currentUtterance = null;
      this.updateState({
        isPlaying: false,
        isPaused: false,
        currentText: '',
      });
      options?.onError?.(e);
    };

    this.currentUtterance = utterance;
    try {
      this.synth.speak(utterance);
    } catch (e) {
      console.warn('TTS speak error:', e);
    }
  }

  public pause() {
    if (this.synth && this.state.isPlaying && !this.state.isPaused) {
      this.synth.pause();
      this.updateState({ isPaused: true });
    }
  }

  public resume() {
    if (this.synth && this.state.isPaused) {
      this.synth.resume();
      this.updateState({ isPaused: false });
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
      this.updateState({
        isPlaying: false,
        isPaused: false,
        currentText: '',
      });
    }
  }

  public isAvailable(): boolean {
    return !!this.synth;
  }
}

export const tts = new TTSEngine();
