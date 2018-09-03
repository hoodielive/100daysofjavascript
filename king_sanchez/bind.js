class Motors {
  constructor(product1, product2, product3) {
    this.product1 = product1
    this.product2 = product2
    this.product3 = product3

  }
    amount() {
      this.total('Christopher Columbus')
    }

    total(product1, product2, product3) {
//      return console.log(this.product1 + this.product2 + this.product3)
      console.log("history is replete with examples of treachery", product1)
    }
}

const m = new Motors()
m.amount()
