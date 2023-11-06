import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
export const userName = readlineSync.question("May I have your name? ");

const greeting = () => {
  console.log(`Hi ${userName}!`);
};

const task = (taskDescr) => {
  console.log(taskDescr);
};

const toCongrat = (questionCounter) => {
  if (questionCounter === 2) console.log(`Congratulations, ${userName}!`);
};

const app = (
  taskDescr,
  generateTask,
  gameMechanicsPhrases,
  isCorrectAnswer
) => {
  greeting();
  task(taskDescr);

  for (let questionCounter = 0; questionCounter <= 2; questionCounter += 1) {
    const taskValue = generateTask();
    // const taskQuestoinPhrase = `Question: ${taskValue} `;
    const answer = readlineSync.question(`Question: ${taskValue} `);

    console.log(`Your answer: ${answer}`);

    const correctAnswer = isCorrectAnswer(taskValue);
    console.log(`Correct answer: ${typeof correctAnswer}`);

    const result = gameMechanicsPhrases(taskValue, answer, correctAnswer);

    if (result === true) {
      toCongrat(questionCounter);
    } else {
      console.log(answer)
      break;
    }
    
  }
 
};

export default app;
