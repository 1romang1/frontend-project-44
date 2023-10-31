import { userName } from './cli.js';

const toCongrat = (questionСounter) => {
  if (questionСounter === 2) console.log(`Congratulations, ${userName}!`);
};

export default toCongrat;
