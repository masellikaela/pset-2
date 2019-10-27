const readlineSync = require("readline-sync");
const annual = Number(readlineSync.question("\nAnnual salary: "));

const pretax = 0.93;

const federal = 0.157;
const state = 0.0447;
const social = 0.062;
const medicare = 0.0145;

const salary = (pretax*annual);
const total = ((salary*federal) + (salary*state) + (salary*social) + (salary*medicare));

const home = (salary-total);

let paycheck = (home / 24).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nYour take-home pay each check will be $" + paycheck + ".")
