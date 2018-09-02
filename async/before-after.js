// warm up by creating obj

const person = {
	firstname: 'khementu', 
	lastName: 'Aje', 
	age: 31, 
	getBio() { 
		return `${this.firstname} is ${this.age}`
	}
} 

const bio = person.getBio() 

console.log(bio) 


// After 

//const person2 = new Person('Khementu', 'Aje', 31) 
//const bio2 = person.getBio() 

//console.log(bio2) 
