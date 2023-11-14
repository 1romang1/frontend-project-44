import app from "../index.js";

const TASK_PHRASE = "What number is missing in the progression?";

const generateTaskValuesProgression = () => {
  const values = [];
  const MIN = 2;
  const MAX = 100;

  const APset = [];
  let startNum = Math.floor(Math.random() * (MAX - MIN) + MIN);

  APset.push(startNum);

  const differenceAP = Math.floor(Math.random() * (MAX - MIN) + MIN);

  for (let i = 0; i < 9; i += 1) {
    const nextAPNum = startNum + differenceAP;
    startNum = nextAPNum;
    APset.push(nextAPNum);
  }

  const randomElement = APset[Math.floor(Math.random() * APset.length)];

  const indexOfElement = APset.indexOf(randomElement);

  const correctAnswer = APset[indexOfElement];
  APset[indexOfElement] = "..";

  const taskValue = APset.join(" ");
  values.push(taskValue);
  values.push(correctAnswer);

  return values;
};

export default () => app(TASK_PHRASE, generateTaskValuesProgression);
