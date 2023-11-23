import app from '../index.js';
import generatorHighLowRanges from '../generatorHighLowRanges.js';

const TASK_PHRASE = 'What number is missing in the progression?';

const createAP = (num, diffNum) => {
  let result = [];
  for (let i = 0; i < 9; i += 1) {
    const nextAPNum = num + diffNum;
    num = nextAPNum;
    result.push(nextAPNum);
  }
  return result;
}

const generateTaskValuesProgression = () => {
  const values = [];
  const LOWER_RANGE = 2;
  const UPPER_RANGE = 100;

  let APset = [];
  let startNum = generatorHighLowRanges(UPPER_RANGE, LOWER_RANGE);

  APset.push(startNum);

  const differenceAP = generatorHighLowRanges(UPPER_RANGE, LOWER_RANGE);
  const tempAPSet = createAP(startNum, differenceAP);
APset = APset.concat(tempAPSet)

  const randomElement = APset[Math.floor(Math.random() * APset.length)];

  const indexOfElement = APset.indexOf(randomElement);

  const correctAnswer = APset[indexOfElement];
  APset[indexOfElement] = '..';

  const taskValue = APset.join(' ');
  values.push(taskValue);
  values.push(correctAnswer.toString());

  return values;
};

export default () => app(TASK_PHRASE, generateTaskValuesProgression);
