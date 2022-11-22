//Exercise #4 
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

/*let myNewArray = [];
myArray.map(function(even) {
  if (even % 2 === 0) {
    myNewArray.push('even');
  }else {
    myNewArray.push('odd')
  }
});*/

//console.log(myNewArray);

//with for loop
let myNewArray = [];
for (let i=0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
     myNewArray.push('even');
  }else {
    myNewArray.push('odd');
  }
}
console.log(myNewArray);
