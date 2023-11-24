import app from '../index.js';
import generatRanges from '../generatRanges.js';

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

const generateTaskValuesGcd = () => {
  let correctAnswer;
  const LOWER_RANGE = 2;
  const UPPER_RANGE = 100;
  const num1 = generatRanges(UPPER_RANGE, LOWER_RANGE);
  const num2 = generatRanges(UPPER_RANGE, LOWER_RANGE);
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

  if (largerNum % smallerNum === 0) {
    correctAnswer = smallerNum;
  } else {
    const dividerslargerNum = createDeviders(largerNum);
    const dividersSmallerNum = createDeviders(smallerNum);
    const intersectionNums = createIntersectionNums(dividerslargerNum, dividersSmallerNum);

    correctAnswer = Math.max(...intersectionNums);
  }
  return [taskValue.join(' '), correctAnswer.toString()];
};

export default () => app(TASK_PHRASE, generateTaskValuesGcd);
