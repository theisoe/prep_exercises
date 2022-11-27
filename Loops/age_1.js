/*let age = 20; 
let tenYears = age + 10; 
let twentyYears = age + 20;
let thirtyYears = age + 30; 
let fortyYears = age + 40;

console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${tenYears} old.`);
console.log(`In 20 years, you will be ${twentyYears} old.`);
console.log(`In 30 years, you will be ${thirtyYears} old.`);
console.log(`In 40 years, you will be ${fortyYears} old.`);*/

//better and shorter solution 
/*let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your current age?')); 
console.log (`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);*/

//Exercise 1 from Loop chapter
let rlSync = require('readline-sync');
let age = parseInt(rlSync.question('What is your current age? '));
for (let futureYears = 10; futureYears < 50; futureYears +=10 ){
  console.log(`In ${futureYears} years, you will be ${age + future} years old`);
}
