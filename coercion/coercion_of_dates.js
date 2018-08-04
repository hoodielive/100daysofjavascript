var now = +new Date(); // now = Date.now(); -> only in ES5

console.log(now);

var foo = "foo"; // ~N -> -(N+1)

console.log(foo);

if (~foo.indexOf("f")) {
    console.log("found it");
} 

