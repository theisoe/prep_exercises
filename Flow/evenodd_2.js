//Exercise #2 and #3
function evenOrOdd(num) {
  if (Number.isInteger(num)) {
    return true;
  } else {
    console.log("The number is not an integer");
  } if (num % 2 === 0) {      //add parseInt(num)for exercise #2
  console.log("even");
  } else {
  console.log("odd");
  }
}

console.log(evenOrOdd(2.5));