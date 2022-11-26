function multiply (a,b) {
  return a * b;
}

function getNumber(prompt) {
let rlSync = require('readline-sync');
let number = parseFloat(rlSync.question(prompt));
return number;
}

let a = getNumber('Enter the first number: ');
let b = getNumber('Enter the second number: ');
console.log(`${a} * ${b} = ${multiply(a,b)}`);


