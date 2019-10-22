const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");

const widthcenti = (width*2.54);
const lengthcenti = (length*2.54);
const perimeter = (widthcenti+widthcenti+lengthcenti+lengthcenti).toLocaleString("en", { minimumFractionDigits: 2, maximiumFractionDigits: 2 });

console.log("\nA(n) " + width + "-by-" + length +"-inch sheet of paper has a perimeter of " + perimeter + " centimeter(s).\n")
