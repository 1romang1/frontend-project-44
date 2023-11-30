import app from '../index.js';
import generateRanges from '../generateRanges.js';

const TASK_PHRASE = 'What number is missing in the progression?';
const LOWER_RANGE = 2;
const UPPER_RANGE = 100;

const createAp = (upperRange, lowerRange) => {
  const result = [];
  const startNum = generateRanges(upperRange, lowerRange);
  result.push(startNum);
  const differenceAp = generateRanges(upperRange, lowerRange);
  const AMOUNT_OF_NUMBERS_IN_PROGRESSION = 9;
  let nextAPNum = startNum;
  for (let i = 0; i < AMOUNT_OF_NUMBERS_IN_PROGRESSION; i += 1) {
    nextAPNum += differenceAp;
    result.push(nextAPNum);
  }
  return result;
};

const generateTaskValuesProgression = () => {
  const apSet = createAp(UPPER_RANGE, LOWER_RANGE);
  const randomNum = generateRanges(apSet.length);
  const correctAnswer = apSet[randomNum];
  apSet[randomNum] = '..';
  const taskValue = apSet.join(' ');
  return [taskValue, correctAnswer.toString()];
};

export default () => app(TASK_PHRASE, generateTaskValuesProgression);
