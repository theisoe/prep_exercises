/*function sum (a, b) {
  return a + b;
}

console.log(sum(22, 10));*/

/*function brendonEichQuote() {
  return console.log("Always bet on JavaScript.");
}

/*console.log(brendonEichQuote());*/

/*function cite(author, quote) {
  console.log(`${author} said: "${quote}"`);
}

cite('thei', 'boo'); */

/*function squaredNumber(num) {
  return num **2;
}

console.log(squaredNumber(3));*/

/*function compareByLength(first, second) {
  if (first.length < second.length) {
    console.log (-1);
  } else if (second.length < first.length) {
    console.log (1);
  } else if (first.length === second.length) {
    console.log(0);
  }
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0 */

/*let oldName = 'Captain Ruby';
let newName = oldName.replace('Ruby', 'JavaScript');

console.log(newName);*/

function greet(greeting) {
  switch (greeting) {
    case 'en':
      console.log ('Hi!');
      break;
    case 'fr':
      console.log('Salut!');
        break;
    case 'pt':
      console.log('Olá!')
        break;
    case 'de':
      console.log('Hallo!');
        break;
    case 'sv':
      console.log('Hej!');
        break;
    case 'af':
      console.log('Haai!');
        break;
  } 
}

greet('af');