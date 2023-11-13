// import app from "../index.js";

// const TASK_PHRASE = "What number is missing in the progression?";

const generateTaskValuesProgression = () => {
  const values = [];

  let correctAnswer;

  const MIN = 2;
  const MAX = 100;

  const APset = [];
  let startNum = Math.floor(Math.random() * (MAX - MIN) + MIN);
  console.log(`startNum = ${startNum}`);
  APset.push(startNum);
  console.log(`first action APset = ${APset}`);

  const differenceAP = Math.floor(Math.random() * (MAX - MIN) + MIN);
  console.log(`differenceAP = ${differenceAP}`);
  for (let i = 0; i < 9; i += 1) {
    const nextAPNum = startNum + differenceAP;
    startNum = nextAPNum;
    APset.push(nextAPNum);
  }
  console.log(`APset = ${APset[0]} ${APset[1]} ${APset[2]} ${APset[3]} ${APset[4]} ${APset[5]} ${APset[6]} ${APset[7]} ${APset[8]} ${APset[9]}`);

const taskValue = APset[Math.floor(Math.random()*APset.length)];
console.log(`taskValue = ${taskValue}`);
  

  //   correctAnswer =
  //     

  //   values.push(correctAnswer);

  // return values;
};

// export default () => app(TASK_PHRASE, generateTaskValuesProgression);

generateTaskValuesProgression();
