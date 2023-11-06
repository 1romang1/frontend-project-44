import app from "../index.js";
import { userName } from "../index.js";

const TASK_DESCR = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateTask = () => Math.floor(Math.random() * 100);

const isCorrectAnswer = (taskValue) => {
  let temp = "";
  if (taskValue % 2 === 0) {
    temp = "yes";
  } else {
    temp = "no";
  }
  // return temp.toString();
  console.log(typeof temp)
  return temp;

};
// let result;
const gameMechanicsPhrases = (taskValue, answer, correctAnswer) => {
  let result = '';
  if (
    (taskValue % 2 === 0 && answer === "yes") ||
    (taskValue % 2 !== 0 && answer === "no")
  ) {
    console.log("Correct!");
    result = true;
    return result;
  }
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}`
  );
  result = false;
  return result;
};

export default () =>
  app(TASK_DESCR, generateTask, isCorrectAnswer, gameMechanicsPhrases);
