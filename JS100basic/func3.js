/*function greet(greeting = "Hello") {
/*console.log(greeting + ', world!');
}
greet('Salutations'); // logs: Salutations, world!
greet(undefined);*/

/*function greet(first = "Hello,", second = "world") {
  console.log(first + ' ' + second + "!");
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School! */

/*function greet() {
  function greeting() {
    return 'Good morning';
  }
  function recipient() {
    return 'Launch School';
  }
  console.log(greeting() + ', ' + recipient() + '!');
}
console.log(greet());*/

/*function calculateBMI(height, weight) {
  let BMI =  parseFloat(weight/(height/100)**2);
    return BMI.toFixed(2);
}

console.log(calculateBMI(180, 80));*/

/*function catYear(humanYear) {
  if (humanYear === 1) {
    return 15; 
  } else if (humanYear === 2) {
    return 15+9;
  } else if (humanYear >= 3) {
    return 24 + (humanYear-2)*4; 
  }
}
console.log(catYear(1));
console.log(catYear(2));
console.log(catYear(3));
console.log(catYear(4));*/

/*function removeLastChar(word) {
  let newArray = word.split("");
    newArray.pop();
    return newArray.join('');
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'*/

/*const template = 'I VERB NOUN.';

let sentence =(verb, noun) => {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.*/

let initGame = () => (
   {
    level: 1,
    score: 0
  }
);

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);