/*function extractLanguage(locale) {
  let word = locale.slice(0, 2);
  return (word);
}

console.log(extractLanguage('en_US.UTF-8'));
console.log(extractLanguage('ko_KR.UTF-16'));*/

/*function extractRegion(locale) {
  return locale.slice(3,5);
}

console.log(extractRegion('en_US.UTF-8'));
console.log(extractRegion('en_GB.UTF-8'));  
console.log(extractRegion('ko_KR.UTF-16')); */

function localGreet(locale) {
  let word = locale.slice(0, 2);
  let region = locale.slice (3,5);
  if (word === 'en' && region === 'US') {
    return 'Hey';
  }else if (word === 'en' && region === 'GB') {
    return 'Hello!';
  }else if (word === 'en' && region === 'AU') {
    return 'Howdy!';
  }
  else if (word === 'fr') {
    return 'Salut!';
  }
}

console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_GB.UTF-8'));  
console.log(localGreet('en_AU.UTF-8'));
console.log(localGreet('fr_FR.UTF-8')); 