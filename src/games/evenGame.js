import app from '../index.js';
import generateRanges from '../generateRanges.js';

const TASK_PHRASE = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (value) => value % 2 === 0;
// const isEven = (value) => (value % 2 === 0 ? 'yes' : 'no');

const generateTaskValuesEven = () => {
  const UPPER_RANGE = 100;
  const taskValue = generateRanges(UPPER_RANGE);
  const correctAnswer = isEven(taskValue) ? 'yes' : 'no';
  return [taskValue, correctAnswer.toString()];
};

export default () => app(TASK_PHRASE, generateTaskValuesEven);
