import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateItemCredit, estimateTheta, calculateOverallAssessment } from './irtScoring';
import { QuestionData, UserAnswer } from '../types';

test('calculateItemCredit for PG: full credit on match, 0 on mismatch', () => {
  const dummyPG: QuestionData = {
    id: 'soal-1',
    nomor: 1,
    elemen: 'Bilangan',
    subelemen: 'Bilangan Real',
    indikator: 'Test',
    tingkatKesulitan: 'Menantang',
    bentukSoal: 'PG',
    judulSoal: 'Test PG',
    stimulus: 'Test',
    tipeStimulus: 'narasi',
    teksPertanyaan: 'Pilih?',
    opsiJawaban: [{ label: 'A', text: 'Opt A' }, { label: 'B', text: 'Opt B' }],
    kunciJawaban: 'B',
    alasanKunci: 'B is right',
    pembahasanNormal: {} as any,
    pembahasanCepat: {} as any,
    konsepPenting: '',
    parameterIRT: { a: 1.5, b: 0.2 },
    narasi: {} as any,
  };

  const correctAns: UserAnswer = {
    questionId: 'soal-1',
    selectedOption: 'B',
    isSubmitted: true,
    scoreCredit: 1,
    isCorrect: true,
  };

  const wrongAns: UserAnswer = {
    questionId: 'soal-1',
    selectedOption: 'A',
    isSubmitted: true,
    scoreCredit: 0,
    isCorrect: false,
  };

  assert.equal(calculateItemCredit(dummyPG, correctAns), 1.0);
  assert.equal(calculateItemCredit(dummyPG, wrongAns), 0.0);
});

test('calculateItemCredit for PGK: partial credit with penalty for wrong choices', () => {
  const dummyPGK: QuestionData = {
    id: 'soal-6',
    nomor: 6,
    elemen: 'Bilangan',
    subelemen: 'Eksponen',
    indikator: 'Test',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'PGK',
    judulSoal: 'Test PGK',
    stimulus: 'Test',
    tipeStimulus: 'narasi',
    teksPertanyaan: 'Pernyataan mana yang benar?',
    opsiJawaban: [
      { label: 'A', text: '1' },
      { label: 'B', text: '2' },
      { label: 'C', text: '3' },
      { label: 'D', text: '4' },
      { label: 'E', text: '5' },
    ],
    kunciJawaban: ['A', 'C', 'D'], // 3 correct choices
    alasanKunci: 'A, C, D are true',
    pembahasanNormal: {} as any,
    pembahasanCepat: {} as any,
    konsepPenting: '',
    parameterIRT: { a: 1.6, b: 0.5 },
    narasi: {} as any,
  };

  // User chooses all 3 correctly: 3/3 = 1.0
  const perfectAns: UserAnswer = {
    questionId: 'soal-6',
    selectedOptions: ['A', 'C', 'D'],
    isSubmitted: true,
    scoreCredit: 1,
    isCorrect: true,
  };
  assert.equal(calculateItemCredit(dummyPGK, perfectAns), 1.0);

  // User chooses 2 correct and 0 wrong: 2/3 ≈ 0.6667
  const twoCorrect: UserAnswer = {
    questionId: 'soal-6',
    selectedOptions: ['A', 'C'],
    isSubmitted: true,
    scoreCredit: 2 / 3,
    isCorrect: false,
  };
  assert.ok(Math.abs(calculateItemCredit(dummyPGK, twoCorrect) - 2 / 3) < 0.001);

  // User chooses 2 correct and 1 wrong ('B'): (2 - 1) / 3 = 1/3 ≈ 0.3333
  const twoCorrectOneWrong: UserAnswer = {
    questionId: 'soal-6',
    selectedOptions: ['A', 'C', 'B'],
    isSubmitted: true,
    scoreCredit: 1 / 3,
    isCorrect: false,
  };
  assert.ok(Math.abs(calculateItemCredit(dummyPGK, twoCorrectOneWrong) - 1 / 3) < 0.001);

  // User chooses all wrong or negative result -> clamped to 0
  const allWrong: UserAnswer = {
    questionId: 'soal-6',
    selectedOptions: ['B', 'E'],
    isSubmitted: true,
    scoreCredit: 0,
    isCorrect: false,
  };
  assert.equal(calculateItemCredit(dummyPGK, allWrong), 0.0);
});

test('calculateItemCredit for BS: 1/3 per correct statement', () => {
  const dummyBS: QuestionData = {
    id: 'soal-11',
    nomor: 11,
    elemen: 'Bilangan',
    subelemen: 'Sifat Operasi',
    indikator: 'Test',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'BS',
    judulSoal: 'Test BS',
    stimulus: 'Test',
    tipeStimulus: 'narasi',
    teksPertanyaan: 'Tentukan Benar atau Salah',
    pernyataanBenarSalah: [
      { id: 's1', statement: 'Statement 1', isCorrect: true, reason: 'R1' },
      { id: 's2', statement: 'Statement 2', isCorrect: false, reason: 'R2' },
      { id: 's3', statement: 'Statement 3', isCorrect: true, reason: 'R3' },
    ],
    kunciJawaban: '',
    alasanKunci: '...',
    pembahasanNormal: {} as any,
    pembahasanCepat: {} as any,
    konsepPenting: '',
    parameterIRT: { a: 1.4, b: 0.1 },
    narasi: {} as any,
  };

  const ans: UserAnswer = {
    questionId: 'soal-11',
    statementAnswers: { s1: true, s2: true /* wrong */, s3: true /* correct */ },
    isSubmitted: true,
    scoreCredit: 2 / 3,
    isCorrect: false,
  };

  assert.ok(Math.abs(calculateItemCredit(dummyBS, ans) - 2 / 3) < 0.001);
});

test('estimateTheta bounds and scaling [200, 800]', () => {
  const emptyRes = estimateTheta([]);
  assert.equal(emptyRes, 0);

  // All high credits should yield high theta
  const highItems = [
    { a: 1.5, b: 0.5, credit: 1.0 },
    { a: 1.8, b: 1.0, credit: 1.0 },
    { a: 1.4, b: -0.2, credit: 1.0 },
  ];
  const thetaHigh = estimateTheta(highItems);
  assert.ok(thetaHigh > 0);

  // All zero credits should yield negative theta
  const lowItems = [
    { a: 1.5, b: 0.5, credit: 0.0 },
    { a: 1.8, b: 1.0, credit: 0.0 },
  ];
  const thetaLow = estimateTheta(lowItems);
  assert.ok(thetaLow < 0);
});
