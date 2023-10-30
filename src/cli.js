import { createRequire } from "module";

const require = createRequire(import.meta.url);

const readlineSync = require("readline-sync");

const greeting = () => {
  console.log("Welcome to the Brain Games!");

  const userName = readlineSync.question("May I have your name? ");

  console.log(`Hi ${userName}!`);
};

export default greeting;
