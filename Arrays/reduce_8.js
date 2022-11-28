function oddLengths(arr) {
  let arrLength = arr.reduce((accumulator, element)=> {
  return accumulator + element.length
}, []);
return arrLength;  
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]