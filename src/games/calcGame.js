import app from '../index.js';

const TASK_PHRASE = 'What is the result of the expression?';

const generateTaskValuesCalc = () => {
  const values = [];

  const UPPER_RANGE = 100;

  const num1 = Math.floor(Math.random() * UPPER_RANGE);
  const num2 = Math.floor(Math.random() * UPPER_RANGE);

  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];

  const taskValue = `${num1} ${randomOperator} ${num2}`;

  values.push(taskValue);

  let correctAnswer;
  switch (randomOperator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    default:
      correctAnswer = num1 * num2;
  }
  values.push(correctAnswer.toString());
  return values;
};

export default () => app(TASK_PHRASE, generateTaskValuesCalc);
