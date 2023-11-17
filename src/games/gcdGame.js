import app from "../index.js";

const TASK_PHRASE = "Find the greatest common divisor of given numbers.";

const createDeviders = (num) => {
  const dividerNum = [];
  for (let i = 1; i < num; i += 1) {
    if (num % i === 0) {
      dividerNum.push(i);
    }
  }
  return dividerNum;
};

const generateTaskValuesGcd = () => {
  const values = [];

  let correctAnswer;

  const MIN = 2;
  const MAX = 100;

  const num1 = Math.floor(Math.random() * (MAX - MIN) + MIN);
  const num2 = Math.floor(Math.random() * (MAX - MIN) + MIN);

  let smallerNum = 0;
  let largerNum = 0;

  if (num1 > num2) {
    largerNum = num1;
    smallerNum = num2;
  } else {
    largerNum = num2;
    smallerNum = num1;
  }

  let taskValue = [];
  taskValue.push(largerNum);
  taskValue.push(smallerNum);
  taskValue = taskValue.join(' ');
  values.push(taskValue);

  if (largerNum % smallerNum === 0) {
    correctAnswer = smallerNum;
    values.push(correctAnswer);
  } else {
    const dividerslargerNum = createDeviders(largerNum);
    const dividersSmallerNum = createDeviders(smallerNum);
    const intersectionNums = [];
    if (dividerslargerNum.length >= dividersSmallerNum.length) {
      for (const item of dividerslargerNum) {
        if (dividersSmallerNum.includes(item)) {
          intersectionNums.push(item);
        }
      }
    } else {
      for (const item of dividersSmallerNum) {
        if (dividerslargerNum.includes(item)) {
          intersectionNums.push(item);
        }
      }
    }

    const sortIntersectionNums = intersectionNums.sort((a, b) => a - b);

    correctAnswer = sortIntersectionNums[
      sortIntersectionNums.length - 1
    ];
    values.push(correctAnswer.toString());
  }
  return values;
};

export default () => app(TASK_PHRASE, generateTaskValuesGcd);
