// explicit coercion is when coercion is 'obvious'

var foo = "123";
var baz = parseInt(foo, 10); 
console.log(baz); 

baz = Number(foo); 
console.log(baz) 

baz = +foo; 
console.log(baz) 

baz = 456; 
foo = baz.toString(); 
console.log(foo);

foo = String(baz);
console.log(foo); 
