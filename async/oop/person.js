
// anytime you define a constructor make it captial (convention)     

const person = function(firstname, lastname, age) { 

    this.firstname = firstname; 
    this.lastname = lastname; 
    this.age = age; 
    
    // no need to return anything because the option is going to be be returned because we are using the 'new' constructor 

}


const me = new person('Larry', 'Soul', 17); 


console.log(me) 

