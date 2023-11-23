import app from '../index.js';
import generatorHighRange from '../generatorHighRange.js';

const isPrime = (value) => {
  let result = '';
  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) {
      result = 'no';
      break;
    } else {
      result = 'yes';
    }
  }
  return result;
};

const TASK_PHRASE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateTaskValuesPrime = () => {
  const FIRST_500_PRIME_NUMBERS = 3571;
  const values = [];
  const taskValue = generatorHighRange(FIRST_500_PRIME_NUMBERS);
  values.push(taskValue);
  const correctAnswer = isPrime(taskValue);
  values.push(correctAnswer);
  return values;
};

export default () => app(TASK_PHRASE, generateTaskValuesPrime);
