// import app from "../index.js";

// const TASK_PHRASE = "Find the greatest common divisor of given numbers.";

const generateTaskValuesGcd = () => {
  const values = [];

  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  const taskValue = num1 + " " + num2;
  console.log(`num1 = ${num1}`)
  console.log(`num2 = ${num2}`)
  console.log(`taskValue = ${taskValue}`)

  values.push(taskValue);
  console.log(`values = ${values}`)

  let correctAnswer;
  // switch (randomOperator) {
  //   case "+":
  //     correctAnswer = num1 + num2;
  //     break;
  //   case "-":
  //     correctAnswer = num1 - num2;
  //     break;
  //   case "*":
  //     correctAnswer = num1 * num2;
  // }
  // values.push(correctAnswer);
  // return values;
};

// export default () => app(TASK_PHRASE, generateTaskValuesGcd);

generateTaskValuesGcd()