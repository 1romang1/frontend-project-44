import app from '../index.js';
import generatorHighRange from '../generatorHighRange.js';

const TASK_PHRASE = 'What is the result of the expression?';

const solution = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
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
