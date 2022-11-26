function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);


/*left and right in line 1 are NOT the same as left and right from line 10-12.
The ones on line 1 are parameters and they can be any value that are added as arguments.
The ones on line 10-12 are reasigned as variables using the function getNumber. 
Review this question and may have to ask the TA. */
