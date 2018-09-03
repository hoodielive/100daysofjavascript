function Person(name) {
    let name = fname; 
    Object.defineProperty(this, 'name', 
    {
        get: getAccount() , {
            if (name === "joel") {
                return 'Bingo'
            }
            return name;
        },
        set: getAccount(n) 
        {
            name = n
        }
    }); 
}
let p = new Person('joel')
console.log(p.name)
p.name = "larry"
console.log(p.name)
