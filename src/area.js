const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");

const widthmilli = (width*25.4);
const lengthmilli = (length*25.4);
const area = (widthmilli*lengthmilli).toLocaleString("en", { minimumFractionDigits: 2, maximiumFractionDigits: 2 });

console.log("\nA(n) " + width + "-by-" + length +"-inch sheet of paper has an area of " + area + " square millimeter(s).")
