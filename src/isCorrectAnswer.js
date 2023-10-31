const isCorrectAnswer = (randomNum) => {
  let correctAnswer = "";
  if (randomNum % 2 === 0) {
    correctAnswer = "yes";
  } else {
    correctAnswer = "no";
  }
};

export default isCorrectAnswer;
