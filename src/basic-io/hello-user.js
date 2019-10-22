const readlineSync = require("readline-sync");

const name = readlineSync.question("Hi! What's your name?\r");

console.log("Hello, " + name + "!");
