
// anytime you define a constructor make it captial (convention)     

const person = function(firstname) { 

    this.firstname = firstname; 
    
    // no need to return anything because the option is going to be be returned because we are using the 'new' constructor 

}


const me = new person('Larry'); 


console.log(me) 

