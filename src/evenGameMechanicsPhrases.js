import { userName } from './cli.js';
import { correctAnswer } from './isCorrectAnswer.js';

let result;
const evenGameMechanicsPhrases = (randomNum, answer) => {
  if (
    (randomNum % 2 === 0 && answer === 'yes')
    || (randomNum % 2 !== 0 && answer === 'no')
  ) {
    console.log('Correct!');
    result = true;
    return result;
  }
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}`,
  );
  // break;
  result = false;
  return result;
};
evenGameMechanicsPhrases();
export { result };
export default evenGameMechanicsPhrases;
