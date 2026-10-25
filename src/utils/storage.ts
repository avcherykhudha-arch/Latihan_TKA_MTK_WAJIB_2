import { UserProgress } from '../types';

const STORAGE_KEY = 'mister_jo_tka_matematika_2026_progress';

export const DEFAULT_PROGRESS: UserProgress = {
  studentName: '',
  currentQuestionIndex: 0,
  answers: {},
  startedAt: Date.now(),
  lastActiveAt: Date.now(),
  isCompleted: false,
  settings: {
    fontSize: 'normal',
    autoPlayAudio: true,
    speechRate: 1.0,
    speechVolume: 1.0,
  },
};

export function loadUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      settings: {
        ...DEFAULT_PROGRESS.settings,
        ...(parsed.settings || {}),
      },
    };
  } catch (e) {
    console.error('Failed to load progress from localStorage', e);
    return DEFAULT_PROGRESS;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    const updated = {
      ...progress,
      lastActiveAt: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
}

export function clearUserProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear progress from localStorage', e);
  }
}
