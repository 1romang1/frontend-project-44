import app from '../index.js';
import generatRanges from '../generatRanges.js';

const TASK_PHRASE = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (value) => (value % 2 === 0 ? 'yes' : 'no');

const generateTaskValuesEven = () => {
  const UPPER_RANGE = 100;
  const taskValue = generatRanges(UPPER_RANGE);
  const correctAnswer = isEven(taskValue);
  return [taskValue, correctAnswer.toString()];
};

export default () => app(TASK_PHRASE, generateTaskValuesEven);
