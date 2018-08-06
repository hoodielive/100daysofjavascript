// implicit 

var foo = "123"
var baz = foo - 0; // okay, javascript lol 
console.log(baz); 

baz = foo - "0"; // lol 
console.log(baz);

baz = foo / 1; 
console.log(baz); 

baz = 456; 
foo = baz + ""; 
console.log(foo); 

foo = baz - ""; 
foo; 
