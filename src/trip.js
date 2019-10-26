const readlineSync = require("readline-sync");
const students = Number(readlineSync.question("\nStudents: "));
const teachers = Number(readlineSync.question("Teachers: "));
const capacity = Number(readlineSync.question("Bus Capacity: "));

const bus = Number(students/capacity);

console.log( bus + " bus(es) is (are) needed, with" + passengers + " passenger(s) on the last bus.")
