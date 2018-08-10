
const Person = function(firstname, lastname, age) { 

    this.firstname = firstname; 
    this.lastname = lastname; 
    this.age = age; 
    

}


Person.prototype.getBio = function() { 
    return `${this.firstname} is ${this.age}` // this method is shared with all instances
} 


Person.prototype.setName = function(fullname) {
    const names = fullname.split(' '); 
    this.firstname = names[0] 
    this.lastname = names[1] 
}

const me = new Person('Larry', 'Soul', 17); 

me.setName('Hood Man');
console.log(me.getBio()) 

const person2 = new Person('Ma', 'love', 19);
console.log(person2.getBio())
