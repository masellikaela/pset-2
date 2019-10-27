const readlineSync = require("readline-sync");
const students = Number(readlineSync.question("\nStudents: "));
const teachers = Number(readlineSync.question("Teachers: "));
const capacity = Number(readlineSync.question("Bus Capacity: "));

const totalpeople = Number(students + teachers).toLocaleString("en", {minimumFractionDigits:0, maximumFractionDigits:0});
const buses= Number(totalpeople / capacity).toLocaleString("en", {minimumFractionDigits:0, maximumFractionDigits:0});
const passengers= Number(totalpeople % capacity).toLocaleString("en", {minimumFractionDigits:0, maximumFractionDigits:0}); 

console.log( buses + " bus(es) is (are) needed, with" + passengers + " passenger(s) on the last bus.")
