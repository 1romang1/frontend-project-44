import readlineSync from "readline-sync";

const app = (taskPhrase, generateTaskValues) => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`${taskPhrase}`);

  // let i = 0;
  const iterationCounter = 3;

  for (let i = 0; i < iterationCounter; i += 1) {
    const [taskValue, correctAnswer] = generateTaskValues();
    const userAnswer = readlineSync.question(`Question: ${taskValue} `);
    console.log(`Your answer: ${userAnswer}`);
    if (correctAnswer === userAnswer) {
      console.log("Correct!");
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'
    Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default app;
