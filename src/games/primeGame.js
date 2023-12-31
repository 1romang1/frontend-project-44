import app from '../index.js';
import generateRanges from '../generateRanges.js';

const isPrime = (value) => {
  let result = true;
  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) {
      result = false;
      return result;
    }
  }
  return result;
};

const TASK_PHRASE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateTaskValuesPrime = () => {
  const FIRST_500_PRIME_NUMBERS = 3571;
  const taskValue = generateRanges(FIRST_500_PRIME_NUMBERS);
  const correctAnswer = isPrime(taskValue) ? 'yes' : 'no';
  return [taskValue, correctAnswer];
};

export default () => app(TASK_PHRASE, generateTaskValuesPrime);
