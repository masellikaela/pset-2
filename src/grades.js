const readlineSync = require("readline-sync");

const homework = readlineSync.question("\nEnter three homework grades.\n");

const quiz = readlineSync.question("\nEnter three quiz grades.\n");

const test = readlineSync.question("\nEnter three test grades.\n");

const weightedhomework = (homework*0.15)
const weightedquiz = (quiz*0.35)
const weightedtest = (test*0.50)
const grade = (weightedhomework*weightedquiz*weightedtest)

console.log("\nYour marking period grade is "+ grade + ".")
