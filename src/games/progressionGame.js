import app from '../index.js';

const TASK_PHRASE = 'What number is missing in the progression?';

const generateTaskValuesProgression = () => {
  const values = [];
  const LOWER_RANGE = 2;
  const UPPER_RANGE = 100;

  const APset = [];
  let startNum = Math.floor(Math.random() * (UPPER_RANGE - LOWER_RANGE) + LOWER_RANGE);

  APset.push(startNum);

  const differenceAP = Math.floor(Math.random() * (UPPER_RANGE - LOWER_RANGE) + LOWER_RANGE);

  for (let i = 0; i < 9; i += 1) {
    const nextAPNum = startNum + differenceAP;
    startNum = nextAPNum;
    APset.push(nextAPNum);
  }

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
