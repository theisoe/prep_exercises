//Exercise 4
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newObj = Object.keys(obj);
let upperCaseKeys = newObj.map (key => key.toUpperCase());
console.log(upperCaseKeys);

