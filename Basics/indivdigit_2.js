//Using arithmetic operators, get the individual digits of a 4-digit number like 4936:

let number = 4936; 
let thousandth = (number-936)/1000;
let hundredth = ((number - 4000)-36)/100;
let tenth = ((number - 4900)-6)/10;
let ones = number % 10; 
console.log(thousandth);
console.log(hundredth);
console.log(tenth);
console.log(ones);