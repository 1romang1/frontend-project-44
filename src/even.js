import greeting from './cli.js';
import evenGameMechanics from './evenGameMechanics.js';

const evenGame = () => {
  greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  evenGameMechanics();
};

export default evenGame;
