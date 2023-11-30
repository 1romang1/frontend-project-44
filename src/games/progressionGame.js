import app from '../index.js';
import generateRanges from '../generateRanges.js';

const TASK_PHRASE = 'What number is missing in the progression?';
const LOWER_RANGE = 2;
const UPPER_RANGE = 100;
const startNum = generateRanges(UPPER_RANGE, LOWER_RANGE);
const differenceAp = generateRanges(UPPER_RANGE, LOWER_RANGE);

const createAp = (start, difference) => {
  const result = [];
  result.push(start);
  const AMOUNT_OF_NUMBERS_IN_PROGRESSION = 9;
  let nextAPNum = start;
  for (let i = 0; i < AMOUNT_OF_NUMBERS_IN_PROGRESSION; i += 1) {
    nextAPNum += difference;
    result.push(nextAPNum);
  }
  return result;
};

const generateTaskValuesProgression = () => {
  const apSet = createAp(startNum, differenceAp);
  const randomNum = generateRanges(apSet.length);
  const correctAnswer = apSet[randomNum];
  apSet[randomNum] = '..';
  const taskValue = apSet.join(' ');
  return [taskValue, correctAnswer.toString()];
};

export default () => app(TASK_PHRASE, generateTaskValuesProgression);
