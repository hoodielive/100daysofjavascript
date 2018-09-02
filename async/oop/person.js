
const Person = function(firstname, lastname, age, likes = []) { 

    this.firstname = firstname; 
    this.lastname = lastname; 
    this.age = age; 
    this.likes = likes;     

}


Person.prototype.getBio = function() { 
    let bio = `${this.firstname} is ${this.age}` // this method is shared with all instances

    this.likes.forEach((like) => {

        bio += `${this.firstname} likes ${like}.`; 

    })

    return bio 
} 


Person.prototype.setName = function(fullname) {
    const names = fullname.split(' '); 
    this.firstname = names[0] 
    this.lastname = names[1] 
}

const me = new Person('Larry', 'Soul', 17, ['Discoures', 'Girlies']); 

me.setName('Hood Man');
console.log(me.getBio()) 

const person2 = new Person('Ma', 'love', 19);
console.log(person2.getBio())
