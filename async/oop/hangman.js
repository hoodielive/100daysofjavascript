
const Hangman = function(word, guesses, guessedLetters) { 

    this.word = word.toLowerCase().split(''); 

    this.guesses = guesses; 

    this.guessedLetters = ['c']
} 


Hangman.prototype.getPuzzle = function() { 
    let puzzle = ''

    this.word.forEach(() => { 
        if (this.guessedLetters.includes(letter) || letter === ' ') { 
            puzzle += letter 
        }
        else {
            puzzle += '*'
        }

    }); 

    return puzzle; 
} 


const game01 = new Hangman('joe', 2); 

console.log(game01); 

const game02 = new Hangman('jee', 3); 

console.log(game02); 

