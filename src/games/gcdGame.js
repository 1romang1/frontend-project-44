// import app from "../index.js";

// const TASK_PHRASE = "Find the greatest common divisor of given numbers.";

// учесть  случай если большее число делится на меньшее функция compare в начале файла

const generateTaskValuesGcd = () => {
  const values = [];

if ()

  const correctAnswer

  const MIN = 2;
  const MAX = 100;

  const num1 = Math.floor(Math.random() * (MAX - MIN) + MIN);
  const num2 = Math.floor(Math.random() * (MAX - MIN) + MIN);

  const taskValue = `${num1} ${num2}`;

  console.log(`num1 = ${num1}`);
  console.log(`num2 = ${num2}`);
  console.log(`taskValue = ${taskValue}`);

  values.push(taskValue);

  console.log(`values = ${values}`);

  const dividersNum1 = [];
  for (let i = 1; i < num1; i += 1) {
    if (num1 % i === 0) {
      dividersNum1.push(i);
    }
  }
  const dividersNum2 = [];
  for (let i = 1; i < num2; i += 1) {
    if (num2 % i === 0) {
      dividersNum2.push(i);
    }
  }
  console.log(`dividersNum1 = ${dividersNum1}`);
  console.log(`dividersNum2 = ${dividersNum2}`);

  const intersectionNum1Num2 = [];
  if (dividersNum1.length >= dividersNum2.length) {
    for (const item of dividersNum1) {
      if (dividersNum2.includes(item)) {
        intersectionNum1Num2.push(item);
      }
    }
  } else {
    for (const item of dividersNum2) {
      if (dividersNum1.includes(item)) {
        intersectionNum1Num2.push(item);
      }
    }
  }
  console.log(`intersectionNum1Num2 = ${intersectionNum1Num2}`);

  const sortIntersectionNum1Num2 = intersectionNum1Num2.sort((a, b) => a - b);

  console.log(`sortIntersectionNum1Num2 = ${sortIntersectionNum1Num2}`);

correctAnswer = sortIntersectionNum1Num2[sortIntersectionNum1Num2.length - 1];

  console.log(`correctAnswer = ${correctAnswer}`);

  values.push(correctAnswer);

  console.log(`values = ${values}`);

  // return values;
};

// export default () => app(TASK_PHRASE, generateTaskValuesGcd);

generateTaskValuesGcd();
