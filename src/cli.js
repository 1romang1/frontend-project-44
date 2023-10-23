import { createRequire } from 'module';

console.log('Welcome to the Brain Games!');

const require = createRequire(import.meta.url);

const readlineSync = require('readline-sync');

const userName = readlineSync.question('May I have your name? ');
const greeting = () => {
  console.log(`Hi ${userName}!`);
};

export default greeting;
