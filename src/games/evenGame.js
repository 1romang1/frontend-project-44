import app from '../index.js';

const TASK_PHRASE = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateTaskValuesEven = () => {
  const values = [];
  const UPPER_RANGE = 100;
  const taskValue = Math.floor(Math.random() * UPPER_RANGE);
  values.push(taskValue);
  let correctAnswer = '';
  if (taskValue % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  values.push(correctAnswer);
  return values;
};

export default () => app(TASK_PHRASE, generateTaskValuesEven);
