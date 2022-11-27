//Exercise #4
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/* It will log 'Product 2', 'Product 3' and 'Product not found' because there is no "break" after each case.
It will log everything after the argument matches the case, which is 113. */
