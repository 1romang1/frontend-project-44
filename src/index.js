import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const userName = readlineSync.question("May I have your name? ");
const greeting = (userName) => {
  console.log(`Hi ${userName}!`);
};
const taskDescr = (taskPhrase) => {
  console.log(`${taskPhrase}`);
};

const isCorrectAnswer = (correctAnswer, userAnswer) => {
  let result;
  if (correctAnswer == userAnswer) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

const app = (taskPhrase, generateTaskValues) => {
  greeting(userName);
  taskDescr(taskPhrase);

  let i = 0;
  const iterationCounter = 3;
  do {
    const [taskValue, correctAnswer] = generateTaskValues();
    const userAnswer = readlineSync.question(`Question: ${taskValue[0]} ${taskValue[1]} `);
    console.log(`Your answer: ${userAnswer}`);
    const result = isCorrectAnswer(correctAnswer, userAnswer);

    if (result === true) {
      console.log("Correct!");

      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'
    Let's try again, ${userName}!`);
      break;
    }
  } while (i < iterationCounter);

  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default app;
