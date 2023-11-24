import app from '../index.js';
import generatRanges from '../generatRanges.js';

const TASK_PHRASE = 'What is the result of the expression?';

const solution = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Oops');
  }
};

const generateTaskValuesCalc = () => {
  const UPPER_RANGE = 100;

  const num1 = generatRanges(UPPER_RANGE);
  const num2 = generatRanges(UPPER_RANGE);

  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];

  const taskValue = `${num1} ${randomOperator} ${num2}`;

  const correctAnswer = solution(num1, num2, randomOperator);
  return [taskValue, correctAnswer.toString()];
};

export default () => app(TASK_PHRASE, generateTaskValuesCalc);
