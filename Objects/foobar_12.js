//Exercise 12
/*function foo(bar) {
  console.log(bar, bar, bar);
}

let bar = foo;

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"*/

//Exercise 13
function foo(bar) {
  console.log(bar());
}

foo(function() {return "Welcome"});    // Should print 'Welcome'
foo(function() {return 3.14});    // Should print 3.1415
foo(function() {return [1, 2, 3]});    // Should print [1, 2, 3]



