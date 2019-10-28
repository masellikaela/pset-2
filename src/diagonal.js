const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");

const diagonal = Math.sqrt(Math.pow(length,2)+ (Math.pow(width,2))).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + width + "-by-" + length +"-inch sheet of paper has a diagonal of " + diagonal + " inch(es).")
