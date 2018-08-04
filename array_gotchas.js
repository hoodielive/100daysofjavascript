// native literals 
var foo; 
foo = new Array(1,2,3) // don't do this 
console.log(foo)
foo = [1,2,3]
console.log(foo)
foo = new Object();  // don't do this
console.log(foo)
foo.a = 1;
foo.b = 2; 
foo.c = 3; 
console.log(foo) 
foo = { a:1, b:2, c:3 }; // do this 
console.log(foo)
