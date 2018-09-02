function getAccount(amount) {
    return {
        _amount: amount, 
          get amount() {
              return this._amount
          },
          set amount(val) {
              let val = 22
              return this._amount -= val
          }
    }
  }
  
  
  //console.log(typeof(getAccount(1000, 20))); 
  
  console.log(getAccount(1005,  22))
