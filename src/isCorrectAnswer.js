let correctAnswer = "";
const isCorrectAnswer = (randomNum) => {
  if (randomNum % 2 === 0) {
    correctAnswer = "yes";
  } else {
    correctAnswer = "no";
  }
  return correctAnswer;
};

export { correctAnswer };
export default isCorrectAnswer;
