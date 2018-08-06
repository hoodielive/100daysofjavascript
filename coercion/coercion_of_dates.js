var now = +new Date(); // now = Date.now(); -> only in ES5

console.log(now);

var foo = "foo"; // ~N -> -(N+1)

console.log(foo);

// search for a substring -> don't use to check for booleans indexOf is used to return a 'number'
if (~foo.indexOf("f")) {
    console.log("found it");
} 

