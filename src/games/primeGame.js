import app from '../index.js';
import generatorHighRange from '../generatorHighRange.js';

const TASK_PHRASE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateTaskValuesPrime = () => {
  const FIRST_500_PRIME_NUMBERS = 3571;
  const values = [];
  const taskValue = generatorHighRange(FIRST_500_PRIME_NUMBERS);
  values.push(taskValue);
  let correctAnswer = '';
  for (let i = 2; i < taskValue; i += 1) {
    if (taskValue % i === 0) {
      correctAnswer = 'no';
      break;
    } else {
      correctAnswer = 'yes';
    }
  }
  values.push(correctAnswer);
  // console.log(values);
  return values;
};

export default () => app(TASK_PHRASE, generateTaskValuesPrime);

// generateTaskValuesPrime();
