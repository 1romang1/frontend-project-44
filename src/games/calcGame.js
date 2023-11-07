import app from "../index.js";

const TASK_PHRASE = "What is the result of the expression?";

const generateTaskValuesCalc = () => {
  const values = [];

  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  const operators = ["+", "-", "*"];
  const randomOperator =
    operators[Math.floor(Math.random() * operators.length)];

  const taskValue = num1 + " " + randomOperator + " " + num2;

  values.push(taskValue);

  let correctAnswer;
  switch (randomOperator) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
  }
  values.push(correctAnswer);
  return values;
};

const isCorrectAnswerCalc = (correctAnswer, userAnswer) => {
  let result;

  if (correctAnswer == userAnswer) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

export default () => app(TASK_PHRASE, generateTaskValuesCalc, isCorrectAnswerCalc);
