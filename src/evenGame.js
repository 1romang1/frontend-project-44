

for (let questionСounter = 0; questionСounter <= 2; questionСounter += 1) {
    const randomNum = getRandomNum(100);
    const randomNumQuestoinPhrase = `Question: ${randomNum} `;
    const answer = readlineSync.question(randomNumQuestoinPhrase);
    let correctAnswer = '';
    if (randomNum % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    console.log(`Your answer: ${answer}`);

    if (
      (randomNum % 2 === 0 && answer === 'yes')
      || (randomNum % 2 !== 0 && answer === 'no')
    ) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}`,
      );
      break;
    }
    if (questionСounter === 2) console.log(`Congratulations, ${userName}!`);
  }