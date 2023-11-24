import app from '../index.js';
import generatorHighRange from '../generatorHighRange.js';

const TASK_PHRASE = 'What is the result of the expression?';

const solution = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      result = num1 * num2;
  }
  return result;
};

const generateTaskValuesCalc = () => {
  const values = [];

  const UPPER_RANGE = 100;

  const num1 = generatorHighRange(UPPER_RANGE);
  const num2 = generatorHighRange(UPPER_RANGE);

  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];

  const taskValue = `${num1} ${randomOperator} ${num2}`;
  values.push(taskValue);

  const correctAnswer = solution(num1, num2, randomOperator);
  values.push(correctAnswer.toString());
  return values;
};

export default () => app(TASK_PHRASE, generateTaskValuesCalc);
