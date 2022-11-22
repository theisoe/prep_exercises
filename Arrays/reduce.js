//Exercise #7

/*let array = [3, 5, 7];
let newArray = array.reduce((accumulator, element)=> accumulator + (element * element), 0);
console.log(newArray); // => 83 */

function sumOfSquares(arr) {
  return arr.reduce((accumulator,num)=> accumulator + num * num, 0)
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
