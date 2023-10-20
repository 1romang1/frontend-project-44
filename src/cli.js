export const readlineSync = require("readline-sync");

export const userName = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!");

