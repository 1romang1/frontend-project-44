import readlineSync from "readline-sync";

export const userName = readlineSync.question("May I have your name? ");

const greeting = () => {
  console.log("Welcome to the Brain Games!");
  console.log(`Hi ${userName}!`);
};

const task = (taskDescr) => {
  console.log(taskDescr);
};

const toCongrat = (questionСounter) => {
  if (questionСounter === 2) console.log(`Congratulations, ${userName}!`);
};

const app = (
  taskDescr,
  generateTask,
  gameMechanicsPhrases,
  isCorrectAnswer,
) => {
  greeting();
  task(taskDescr);

  for (let questionCounter = 0; questionCounter <= 2; questionCounter += 1) {
    const randomTask = generateTask();
    // const taskQuestoinPhrase = `Question: ${randomTask} `;
    const answer = readlineSync.question(`Question: ${randomTask} `);

    console.log(`Your answer: ${answer}`);

    const correctAnswer = isCorrectAnswer(randomTask);
    console.log(`Correct answer: ${correctAnswer}`);

    const result = gameMechanicsPhrases(randomTask, answer, correctAnswer);

    if (result) {
      toCongrat(questionCounter);
    } else {
      break;
    }
  }
};

export default app;
