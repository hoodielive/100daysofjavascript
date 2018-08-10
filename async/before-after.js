# warm up by creating obj

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
