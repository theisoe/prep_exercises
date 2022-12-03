/*let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

console.log(student.locker);*/

/*let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

console.log(jane.location.country);*/

/*let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age = 1;
fido['favorite food']= 'steak';

console.log(fido);*/

/*let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) {
    console.log(`Hej, ${name}`);
  },
};

jane.greet('Bobby'); // Hej, Bobby!*/

/*let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);
console.log(keys);*/

/*let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = Object.entries(person);
console.log(nestedPerson);
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]*/

/*let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
  let obj1 = Object.fromEntries(nestedArray);
  console.log(obj1);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }*/

let obj = {
  number: 1,
  string: 'abc',
  array: [1, 2, 3],
};

function clone(obj) {
  
}