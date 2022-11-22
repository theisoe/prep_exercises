//Exercise #5
function findIntegers (arr) {
arr.filter(function(num) {
  if (Number.isInteger(num)) {
    console.log(num);
  };
})
}

let myArr = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(myArr);
console.log(integers);