import app from "../index.js";

const TASK_PHRASE = "Find the greatest common divisor of given numbers.";

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

  const taskValue = [];
  taskValue.push(largerNum);
  taskValue.push(smallerNum);
  values.push(taskValue);

  if (largerNum % smallerNum === 0) {
    correctAnswer = smallerNum;
  } else {
    const dividerslargerNum = [];
    for (let i = 1; i < largerNum; i += 1) {
      if (largerNum % i === 0) {
        dividerslargerNum.push(i);
      }
    }
    const dividersSmallerNum = [];
    for (let i = 1; i < smallerNum; i += 1) {
      if (smallerNum % i === 0) {
        dividersSmallerNum.push(i);
      }
    }

    const intersectionLargerNumSmallerNum = [];
    if (dividerslargerNum.length >= dividersSmallerNum.length) {
      for (const item of dividerslargerNum) {
        if (dividersSmallerNum.includes(item)) {
          intersectionLargerNumSmallerNum.push(item);
        }
      }
    } else {
      for (const item of dividersSmallerNum) {
        if (dividerslargerNum.includes(item)) {
          intersectionLargerNumSmallerNum.push(item);
        }
      }
    }

    const sortIntersectionLargerNumSmallerNum =
      intersectionLargerNumSmallerNum.sort((a, b) => a - b);

    correctAnswer =
      sortIntersectionLargerNumSmallerNum[
        sortIntersectionLargerNumSmallerNum.length - 1
      ];

    values.push(correctAnswer);
  }
  return values;
};

export default () => app(TASK_PHRASE, generateTaskValuesGcd);
