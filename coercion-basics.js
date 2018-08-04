// ToString // stringifying 

/** "on arrays" 
 * [] "" 
 * [1,2,3] "123"
 * [null,undefined] ","
 * [[[],[],[]],[]] ",,,"
 * [,,,,] ",,,"
 **/

/** "on objects"
 * {} "[object Object]"
 * {a:2} "[object Object]" 
 **/ 

/** 'examples'
 * null "null"
 * true "true"
 * false "false"
 * 3.14159 "3.14159"
 * 0 "0"
 * -0 "0"
 **/ 


/** ToNumber 
 * "" 0 
 * "0" 0
 * "-0" -0
 * " 009 " 9
 * "3.14" 3.14
 * "0." 0
 * ".0" 0
 * "." NaN
 * "Oxaf" 175 
 **/

/** booleans
 * false 0 
 * true 1
 * null 0 
 * undefined NaN
 **/ 

/** 
 * ToNumber(object): ToPrimitive(number) 
 * ToPrimitive -> valueOf() toString() 
 * [""] 0 
 * ["0"] 0
 * ["-0"] -0 
 * [null] 0
 * [undefined] 0
 * [1,2,3] NaN
 * [[[[]]]] 0 
 ** this is coercion ToNumber/ToPrimitive(Array)/ 

 /** ToBoolean (Falsy - Truthy) 
  * Falsy
  * ''"
  * 0,+0,-0
  * null
  * NaN
  * false
  * undefined 
  * Truthy
  * "foo"
  * 23
  * {a:1}
  * [1,3]
  * true
  * function(){..}
  * ... 
  **/
