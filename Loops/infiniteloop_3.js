//Exercise 3: the following code causes an infinite loop (a loop that never stops iterating). Why?
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

//the code is in infinite loop because the counter inside while conditon is always equal to 1. 




