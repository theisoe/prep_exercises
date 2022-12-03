/*let str = 'These aren\'t the droids you\'re looking for.';

let strLength = str.length 
console.log(strLength);*/

/*let str2 = 'confetti floating everywhere';
let upperStr2 = str2.toUpperCase();
console.log(upperStr2);*/

/*function repeat(rep, str) {

  while (rep > 0) { 
    console.log(str);
    rep -= 1;
  }

}

console.log(repeat(3, 'bye'));*/

/*let rhyme = "A pirate I was meant to be!\nTrim the sails and roam the sea!"
console.log(rhyme);*/

/*let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

//console.log(string1.toUpperCase === string2.toUpperCase);
console.log(string1.toLowerCase() === string2.toLowerCase());
console.log(string2.toUpperCase() === string3.toUpperCase());*/

/*let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
let check = byteSequence.toLowerCase().includes('x');

console.log(check);*/

/*function isBlank(string) {
  if (string == '') {
    return true; 
  }else {
    return false;
  }
}
console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true */


function isBlank(string) {
  if (string.trim().length === 0) {
    return true;
  } else 
    return false;
  }

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true


/*let str = 'launch school tech & talk'; 
firstStr = str.charAt(0);
secondStr = str.charAt(7);
thirdStr = str.charAt(14);
fourthStr = str.charAt(21);

upperFirstStr = firstStr.toUpperCase();
upperSecondStr = secondStr.toUpperCase();
upperThirdStr = thirdStr.toUpperCase();
upperFourthStr = fourthStr.toUpperCase();

newStr = upperFirstStr + str.slice(1,6)+ ' ' + upperSecondStr + str.slice(8,13) 
+ ' ' + upperThirdStr + str.slice(15,19) + '& ' + upperFourthStr + str.slice(22,25);

console.log(newStr);*/
