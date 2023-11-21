import app from '../index.js';
import generatorHighRange from '../generatorHighRange.js';

const TASK_PHRASE = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (value) => {
  let result;
  if (value % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

const generateTaskValuesEven = () => {
  const values = [];
  const UPPER_RANGE = 100;
  const taskValue = generatorHighRange(UPPER_RANGE);
  values.push(taskValue);
  const correctAnswer = isEven(taskValue);
  values.push(correctAnswer);
  return values;
};

export default () => app(TASK_PHRASE, generateTaskValuesEven);
