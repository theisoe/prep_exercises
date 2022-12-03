//Exercise #8 Need to review again 
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(sourceObj, arrayOfKeys) {
  let destinationObject = {};

  if (arrayOfKeys) {
    arrayOfKeys.forEach(key => {
      destinationObject[key] = sourceObj[key];
    });
  }else {
    Object.assign(destinationObject, sourceObj);
  }

  return destinationObject; 
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }