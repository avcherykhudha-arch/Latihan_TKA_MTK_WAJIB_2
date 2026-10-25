import { QuestionData } from '../../types';
import { questions01to06 } from './q01_to_q06';
import { questions07to12 } from './q07_to_q12';
import { questions13to18 } from './q13_to_q18';
import { questions19to24 } from './q19_to_q24';
import { questions25to30 } from './q25_to_q30';

export const ALL_QUESTIONS: QuestionData[] = [
  ...questions01to06,
  ...questions07to12,
  ...questions13to18,
  ...questions19to24,
  ...questions25to30,
];

export const TOTAL_QUESTIONS = ALL_QUESTIONS.length;
