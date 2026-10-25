import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_QUESTIONS } from './index';
import { ElementType, QuestionType, DifficultyLevel } from '../../types';

test('ALL_QUESTIONS contains exactly 30 questions', () => {
  assert.equal(ALL_QUESTIONS.length, 30);
});

test('Element distribution: 6 Bilangan, 6 Aljabar, 6 Geometri, 6 Trigonometri, 6 Data dan Peluang', () => {
  const counts: Record<ElementType, number> = {
    'Bilangan': 0,
    'Aljabar': 0,
    'Geometri dan Pengukuran': 0,
    'Trigonometri': 0,
    'Data dan Peluang': 0,
  };

  ALL_QUESTIONS.forEach(q => {
    counts[q.elemen] = (counts[q.elemen] || 0) + 1;
  });

  assert.equal(counts['Bilangan'], 6);
  assert.equal(counts['Aljabar'], 6);
  assert.equal(counts['Geometri dan Pengukuran'], 6);
  assert.equal(counts['Trigonometri'], 6);
  assert.equal(counts['Data dan Peluang'], 6);
});

test('Question type distribution: exactly 10 PG, 10 PGK, 10 BS', () => {
  const counts: Record<QuestionType, number> = {
    'PG': 0,
    'PGK': 0,
    'BS': 0,
  };

  ALL_QUESTIONS.forEach(q => {
    counts[q.bentukSoal] = (counts[q.bentukSoal] || 0) + 1;
  });

  assert.equal(counts['PG'], 10);
  assert.equal(counts['PGK'], 10);
  assert.equal(counts['BS'], 10);
});

test('Format specifications: PG has 5 options & single key; PGK has 5 options & multiple keys; BS has 3 statements', () => {
  ALL_QUESTIONS.forEach(q => {
    assert.ok(q.nomor >= 1 && q.nomor <= 30, `Nomor ${q.nomor} is valid`);
    assert.ok(q.stimulus.length > 20, `Question ${q.nomor} has stimulus`);
    assert.ok(q.teksPertanyaan.length > 5, `Question ${q.nomor} has question text`);
    assert.ok(q.narasi.stimulus.length > 10, `Question ${q.nomor} has voice narration`);

    // Pembahasan normal 8 stages
    assert.ok(q.pembahasanNormal.tahap1_memahami.length > 0, `Q${q.nomor} tahap 1`);
    assert.ok(q.pembahasanNormal.tahap2_model.length > 0, `Q${q.nomor} tahap 2`);
    assert.ok(q.pembahasanNormal.tahap3_strategi.length > 0, `Q${q.nomor} tahap 3`);
    assert.ok(q.pembahasanNormal.tahap4_penyelesaian.length > 0, `Q${q.nomor} tahap 4`);
    assert.ok(q.pembahasanNormal.tahap7_kesimpulan.length > 0, `Q${q.nomor} tahap 7`);

    // Cara cepat
    assert.ok(q.pembahasanCepat.strategiInti.length > 0, `Q${q.nomor} strategiInti`);
    assert.ok(q.pembahasanCepat.hasilAkhir.length > 0, `Q${q.nomor} hasilAkhir`);

    if (q.bentukSoal === 'PG') {
      assert.equal(q.opsiJawaban?.length, 5, `Q${q.nomor} PG must have 5 options`);
      assert.equal(typeof q.kunciJawaban, 'string', `Q${q.nomor} PG key must be string`);
      assert.ok(['A', 'B', 'C', 'D', 'E'].includes(q.kunciJawaban as string), `Q${q.nomor} valid key`);
    } else if (q.bentukSoal === 'PGK') {
      assert.equal(q.opsiJawaban?.length, 5, `Q${q.nomor} PGK must have 5 options`);
      assert.ok(Array.isArray(q.kunciJawaban), `Q${q.nomor} PGK key must be array`);
      const keys = q.kunciJawaban as string[];
      assert.ok(keys.length >= 2 && keys.length <= 5, `Q${q.nomor} PGK must have 2-5 correct options`);
    } else if (q.bentukSoal === 'BS') {
      assert.equal(q.pernyataanBenarSalah?.length, 3, `Q${q.nomor} BS must have 3 statements`);
      q.pernyataanBenarSalah?.forEach(stmt => {
        assert.equal(typeof stmt.isCorrect, 'boolean', `Statement ${stmt.id} is boolean`);
        assert.ok(stmt.reason.length > 5, `Statement ${stmt.id} has reason`);
      });
    }
  });
});
