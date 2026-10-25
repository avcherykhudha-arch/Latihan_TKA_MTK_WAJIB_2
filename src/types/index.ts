export type ElementType = 
  | 'Bilangan' 
  | 'Aljabar' 
  | 'Geometri dan Pengukuran' 
  | 'Trigonometri' 
  | 'Data dan Peluang';

export type QuestionType = 'PG' | 'PGK' | 'BS';
export type DifficultyLevel = 'Menantang' | 'Sulit' | 'Sangat Sulit';

export type StimulusType = 
  | 'narasi' 
  | 'tabel' 
  | 'grafik' 
  | 'geometri' 
  | 'ilustrasi' 
  | 'infografik' 
  | 'gabungan';

export interface TableData {
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
}

export interface VisualData {
  type: 'svg' | 'table' | 'none';
  svgType?: string; // identifier for specific SVG rendering
  caption?: string;
  tableData?: TableData;
}

export interface DistractorAnalysis {
  option: string;
  explanation: string;
}

export interface StatementBS {
  id: string;
  statement: string;
  isCorrect: boolean; // true = BENAR, false = SALAH
  reason: string;
}

export interface QuestionData {
  id: string;
  nomor: number;
  elemen: ElementType;
  subelemen: string;
  indikator: string;
  tingkatKesulitan: DifficultyLevel;
  bentukSoal: QuestionType;
  judulSoal: string;
  stimulus: string;
  tipeStimulus: StimulusType;
  visualData?: VisualData;
  teksPertanyaan: string;
  opsiJawaban?: { label: string; text: string }[]; // 5 items A-E for PG and PGK
  pernyataanBenarSalah?: StatementBS[]; // 3 items for BS
  kunciJawaban: string | string[]; // string (e.g. 'C') for PG, string[] (e.g. ['A','C','D']) for PGK
  alasanKunci: string;
  pembahasanNormal: {
    tahap1_memahami: string;
    tahap2_model: string;
    tahap3_strategi: string;
    tahap4_penyelesaian: string;
    tahap5_verifikasi: string;
    tahap6_evaluasiOpsi: string;
    tahap7_kesimpulan: string;
    tahap8_refleksi: string;
  };
  pembahasanCepat: {
    strategiInti: string;
    langkahPengerjaan: string;
    alasanMatematis: string;
    hasilAkhir: string;
    perbandinganEfisiensi: string;
  };
  analisisDistraktor?: DistractorAnalysis[];
  konsepPenting: string;
  parameterIRT: {
    a: number; // daya beda (discrimination) e.g. 1.2 to 2.2
    b: number; // tingkat kesulitan (difficulty) e.g. -1.5 to 2.2
  };
  narasi: {
    stimulus: string;
    pertanyaan: string;
    opsi: string;
    umpanBalikBenar: string;
    umpanBalikSalah: string;
    pembahasanNormal: string;
    pembahasanCepat: string;
    refleksi: string;
  };
}

export interface UserAnswer {
  questionId: string;
  selectedOption?: string; // For PG: 'A'..'E'
  selectedOptions?: string[]; // For PGK: e.g. ['A', 'C']
  statementAnswers?: Record<string, boolean>; // For BS: { 's1': true, 's2': false, 's3': true }
  isSubmitted: boolean;
  scoreCredit: number; // 0 to 1
  isCorrect: boolean; // scoreCredit === 1
  submittedAt?: number;
}

export interface UserProgress {
  studentName: string;
  currentQuestionIndex: number;
  answers: Record<string, UserAnswer>;
  startedAt: number;
  lastActiveAt: number;
  isCompleted: boolean;
  settings: {
    fontSize: 'normal' | 'large' | 'huge';
    autoPlayAudio: boolean;
    speechRate: number; // 0.8, 1.0, 1.2
    speechVolume: number; // 0 to 1
  };
}

export interface IRTScoreResult {
  estimatedTheta: number;
  scaleScore: number; // 200 - 800
  totalAnswered: number;
  totalCorrect: number;
  totalQuestions: number;
  elementPerformance: Record<ElementType, { correct: number; total: number; percentage: number }>;
  categoryPerformance: Record<QuestionType, { correct: number; total: number; percentage: number }>;
  difficultyPerformance: Record<DifficultyLevel, { correct: number; total: number; percentage: number }>;
  strongestElement: ElementType;
  weakestElement: ElementType;
  teacherRecommendation: string;
}
