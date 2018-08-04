/** Natives 
 * Number
 * Boolean
 * Function
 * Object
 * Array
 * RegExp
 * Date
 * Error
 **/ 

/** to call them Native Constructors would be more accurate 
 * new String()
 * new Number() 
 * new Boolean()
 * new Function() 
 * new Object() 
 * new Array() 
 * new RegExp() 
 * new Date() 
 * new Error() 
 **/ 

var foo = new String("foo"); 
console.log(foo); 
console.log(typeof(foo)); 
console.log(foo instanceof String); 
//console.log(foo instanceof string); 

foo = String("foo"); 
console.log(typeof foo); 

foo = new Number(37); 
console.log(typeof foo); 
