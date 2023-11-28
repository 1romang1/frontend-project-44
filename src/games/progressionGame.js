import app from '../index.js';
import generatRanges from '../generatRanges.js';

const TASK_PHRASE = 'What number is missing in the progression?';
const LOWER_RANGE = 2;
const UPPER_RANGE = 100;

const createAp = () => {
  const result = [];
  const startNum = generatRanges(UPPER_RANGE, LOWER_RANGE);
  const differenceAp = generatRanges(UPPER_RANGE, LOWER_RANGE);
  const AMOUNT_OF_NUMBERS_IN_PROGRESSION = 9;
  let nextAPNum = startNum;
  for (let i = 0; i < AMOUNT_OF_NUMBERS_IN_PROGRESSION; i += 1) {
    nextAPNum += differenceAp;
    result.push(nextAPNum);
  }
  return result;
};

const generateTaskValuesProgression = () => {
  const apSet = createAp();
  const hiddenElement = apSet[generatRanges(apSet.length)];
  const correctAnswer = hiddenElement;
  apSet[apSet.indexOf(hiddenElement)] = '..';
  const taskValue = apSet.join(' ');
  return [taskValue, correctAnswer.toString()];
};

export default () => app(TASK_PHRASE, generateTaskValuesProgression);
