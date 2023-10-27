import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

const greeting = () => {
  console.log(`Hi ${userName}!`);
};

greeting();

const getRandomNum = (max) => Math.floor(Math.random() * max);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i <= 2; i += 1) {
  const randomNum = getRandomNum(100);
  const randomNumQuestoinPhrase = `Question: ${randomNum} `;
  const answer = readlineSync.question(randomNumQuestoinPhrase);

  console.log(`Your answer: ${answer}`);

  if (
    (randomNum % 2 === 0 && answer === 'yes')
    || (randomNum % 2 !== 0 && answer === 'no')
  ) {
    console.log('Correct!');
  } else {
    let oppositAnswer;
    if (answer === 'yes') {
      oppositAnswer = 'no';
    } else {
      oppositAnswer = 'yes';
    }
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${oppositAnswer}'. Let's try again, ${userName}`,
    );
    break;
  }
  console.log(`Congratulations, ${userName}!`);
}
