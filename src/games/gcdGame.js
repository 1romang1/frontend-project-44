import app from '../index.js';
import generateRanges from '../generateRanges.js';

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
  const intersection = arr1.filter((item) => arr2.includes(item));
  return intersection;
};

const findGcd = (num1, num2) => {
  let result = 0;
  if (num1 % num2 === 0) {
    return num2;
  }
  const dividerslargerNum = createDeviders(num1);
  const dividersSmallerNum = createDeviders(num2);
  const intersectionNums = createIntersectionNums(dividerslargerNum, dividersSmallerNum);
  result = Math.max(...intersectionNums);
  return result;
};

const generateTaskValuesGcd = () => {
  let correctAnswer = 0;
  const LOWER_RANGE = 2;
  const UPPER_RANGE = 100;
  const num1 = generateRanges(UPPER_RANGE, LOWER_RANGE);
  const num2 = generateRanges(UPPER_RANGE, LOWER_RANGE);
  let smallerNum = 0;
  let largerNum = 0;

  if (num1 > num2) {
    largerNum = num1;
    smallerNum = num2;
  } else {
    largerNum = num2;
    smallerNum = num1;
  }

  const taskValue = [];
  taskValue.push(largerNum);
  taskValue.push(smallerNum);

  correctAnswer = findGcd(largerNum, smallerNum);

  return [taskValue.join(' '), correctAnswer.toString()];
};

export default () => app(TASK_PHRASE, generateTaskValuesGcd);
