import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
const greeting = () => {
  console.log(`Hi ${userName}!`);
};

export { userName };
export default greeting;
