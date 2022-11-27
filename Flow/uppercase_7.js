//Exercise 7
function allCaps(input) {
  if (input.length > 10) {
    return input.toUpperCase();
  } else {
    return input;
  }
}

console.log(allCaps('applefarmss'));