import app from '../index.js';

const TASK_PHRASE = 'Find the greatest common divisor of given numbers.';

const createDeviders = (num) => {
  const dividerNum = [];
  for (let i = 1; i < num; i += 1) {
    if (num % i === 0) {
      dividerNum.push(i);
    }
  }
  return dividerNum;
};

const createIntersectionNums = (arr1, arr2) => {
  const intersection = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }
  return intersection;
};

const generateTaskValuesGcd = () => {
  const values = [];

  let correctAnswer;

  const LOWER_RANGE = 2;
  const UPPER_RANGE = 100;

  const num1 = Math.floor(Math.random() * (UPPER_RANGE - LOWER_RANGE) + LOWER_RANGE);
  const num2 = Math.floor(Math.random() * (UPPER_RANGE - LOWER_RANGE) + LOWER_RANGE);

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
    values.push(correctAnswer.toString());
  } else {
    const dividerslargerNum = createDeviders(largerNum);
    const dividersSmallerNum = createDeviders(smallerNum);
    const intersectionNums = createIntersectionNums(dividerslargerNum, dividersSmallerNum);

    const sortIntersectionNums = intersectionNums.sort((a, b) => a - b);

    correctAnswer = sortIntersectionNums[
      sortIntersectionNums.length - 1
    ];
    values.push(correctAnswer.toString());
  }
  return values;
};

export default () => app(TASK_PHRASE, generateTaskValuesGcd);
