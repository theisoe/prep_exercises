let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLength(string) {
  let arrLength = string.map(function(item) {
    return item.length;
})
let oddLength = arrLength.filter(element => element % 2 === 1);
  return oddLength;
};


  console.log(oddLength(arr));