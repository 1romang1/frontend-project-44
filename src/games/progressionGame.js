import app from '../index.js';
import generatRanges from '../generatRanges.js';

const TASK_PHRASE = 'What number is missing in the progression?';

const createAP = (num, diffNum) => {
  const result = [];
  const AMOUNT_OF_NUMBERS_IN_PROGRESSION = 9;
  let nextAPNum = num;
  for (let i = 0; i < AMOUNT_OF_NUMBERS_IN_PROGRESSION; i += 1) {
    nextAPNum += diffNum;
    result.push(nextAPNum);
  }
  return result;
};

const generateTaskValuesProgression = () => {
  const LOWER_RANGE = 2;
  const UPPER_RANGE = 100;

  let apSet = [];
  const startNum = generatRanges(UPPER_RANGE, LOWER_RANGE);

  apSet.push(startNum);

  const differenceAP = generatRanges(UPPER_RANGE, LOWER_RANGE);
  const tempapSet = createAP(startNum, differenceAP);
  apSet = apSet.concat(tempapSet);

  const randomElement = apSet[Math.floor(Math.random() * apSet.length)];

  const indexOfElement = apSet.indexOf(randomElement);

  const correctAnswer = apSet[indexOfElement];
  apSet[indexOfElement] = '..';

  const taskValue = apSet.join(' ');
  return [taskValue, correctAnswer.toString()];
};

export default () => app(TASK_PHRASE, generateTaskValuesProgression);
