import readlineSync from 'readline-sync';
import getRandomNum from './getRandomNum.js';
import isCorrectAnswer from './isCorrectAnswer.js';
import evenGameMechanicsPhrases, {
  result,
} from './evenGameMechanicsPhrases.js';
import toCongrat from './toCongrat.js';

const evenGameMechanics = () => {
  for (let questionСounter = 0; questionСounter <= 2; questionСounter += 1) {
    const randomNum = getRandomNum(100);
    const randomNumQuestoinPhrase = `Question: ${randomNum} `;
    const answer = readlineSync.question(randomNumQuestoinPhrase);

    isCorrectAnswer(randomNum);
    console.log(`Your answer: ${answer}`);
    evenGameMechanicsPhrases(randomNum, answer);
    if (result) {
      toCongrat(questionСounter);
    } else {
      break;
    }
  }
};

export default evenGameMechanics;
