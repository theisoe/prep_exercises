//Exercise#6

function oddLengths(array) {
let length = array.map(function(element) { 
 return element.length;
});
let oddLengths = length.filter(function (value) {
 return value % 2 === 1 
});
return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr))

