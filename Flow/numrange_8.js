//Exercise 8
function numberRange(num) {
  if (0 < num <= 50) {
    console.log(`${num} is between 0 and 50`)
  }else if ( 51< num <= 100) {
    console.log(`${num} is between 51 and 100`)
  }else if ( num > 100) {
    console.log(`${num} is greater than 100`);
  }else if ( num < 0) {
    console.log(`${num} is less than 0`);
  }
  }

  numberRange (25)