
const Hangman = function(word, numofGuesses) { 

    this.word = word; 

    this.numofGuesses = numofGuesses; 
} 


// inheritance - allowing instances of the constructor is nothing but prototypal inheritance - not a true class 

const instance01 = new Hangman('joe', 2); 

console.log(instance01); 

const instance02 = new Hangman('jee', 3); 

console.log(instance02); 

