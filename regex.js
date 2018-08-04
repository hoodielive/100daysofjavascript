var foo; 

console.log(foo) 

foo = new RegExp("a*b","g"); 
console.log(foo) 

foo = /a*b/g; 
console.log(foo) 

foo = new Date(); 
console.log(foo) 

// there is no Date literal, so you'll have to use the constructor for Date 

