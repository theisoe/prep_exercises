function multiply(left, right) {   //mutiply, left, right  [//Exercise 9 id all the variables]

  let product = left * right;       // product, left and right 
  return product;                   //product 
}
function getNumber(prompt) {      //getNumber, prompt
  return parseFloat(question(prompt)); //prompt, parseFloat, question 
}

let left = getNumber('Enter the first number: '); //left, getNumber
let right = getNumber('Enter the second number: '); //right, getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`); //console, left, right, multiply, console.log (but not log)


