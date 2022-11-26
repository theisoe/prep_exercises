function say(text = "hello") {
  console.log(text + "!");
}

say();
say("Howdy");

function foo() {
  function bar() {
    console.log("BAR");
  }
  bar();
}

foo();