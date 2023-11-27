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

  let APset = [];
  const startNum = generatRanges(UPPER_RANGE, LOWER_RANGE);

  APset.push(startNum);

  const differenceAP = generatRanges(UPPER_RANGE, LOWER_RANGE);
  const tempAPSet = createAP(startNum, differenceAP);
  APset = APset.concat(tempAPSet);

  const randomElement = APset[Math.floor(Math.random() * APset.length)];

  const indexOfElement = APset.indexOf(randomElement);

  const correctAnswer = APset[indexOfElement];
  APset[indexOfElement] = '..';

  const taskValue = APset.join(' ');
  return [taskValue, correctAnswer.toString()];
};

export default () => app(TASK_PHRASE, generateTaskValuesProgression);
