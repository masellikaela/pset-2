const readlineSync = require("readline-sync");

const length = Number(48);
const width = Number(24);
const diameter = Number(6);
const radius = (diameter/2);
const circlearea = (radius * radius * Math.PI);
const boardsurfacearea = (length * width);
const totalsurfacearea = (boardsurfacearea - circlearea).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nThe surface area of a standard Cornhole board is " + totalsurfacearea + " square inch(es).")
