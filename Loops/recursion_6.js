function factorial(number) {
  if (number < 2) {
  return 1;
  }
  return factorial(number-1) * number; 
  }

  console.log(factorial(1));
  console.log(factorial(2));
  console.log(factorial(3));
  console.log(factorial(4));
  console.log(factorial(5));
  console.log(factorial(6));
  console.log(factorial(7));
  console.log(factorial(8));
