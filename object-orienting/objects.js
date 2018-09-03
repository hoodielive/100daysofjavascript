
//const name = "joel"
//const person = { name } 
//console.log(person)
//
//
//const p2 = { ...person, copy: true } // Object spreading 
//console.log(p2)

// Computed property keys

const inst = "Guitar"
const person = { 
  // like playsGuitar: true 
  ['plays' + inst]: true
}

console.log(person)

// Shorthand method definition 

const account = { 
  amount: 100, 

  // ES5 old style 
  add: function(amt) {
    this.amount += amt
  }, 
  // ES6 shorthand 
  remove(amt) {
    return this.amount -= amt 
  }
}

console.log(account)
console.log(account.remove(4))


//function getAccount(amount) {
//  return {
//    amount, 
//    add(amt) {
//      this.amount += amt 
//    },
//    // shorthand 
//    remove(amt) {
//      this.amount -= amt
//    }
//  }
//}
//

function getAccount(amount) {
  return {
      _amount: amount, 
      get amount() {
          return this._amount
      },
      set amount(val) {
          return this._amount = val
      }
  }
}

//getAccount(1000)._amount.amount(33)

console.log(typeof(getAccount._amount)); 

getAccount(_amount=1000, val=33)


getAccount.valueOf.__defineGetter__

console.log(4 + 5) 
