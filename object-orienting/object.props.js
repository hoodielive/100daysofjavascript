// Property Object.prototype -> the objects' prototype 
// Object.prototype.__proto__ value: null

function Vehicles(speed, horse_p) {
  this.speed = speed
  this.horse_p = horse_p
}

Vehicles.prototype.NewVehicle = {
  constructor: Vehicles,
  shit: function(message) {
      console.log('haters are everywhere', message)
  }, 
}

Vehicles.prototype.NewInsight = {
  constructor: Vehicles,
  shit: function(message) {
      console.log('pussy is everywhere', message)
  }, 
}
// Object.assign(target, ...source) -- Copy properties form sources to targets 
myObject = new Vehicles()
myObject2 = new Vehicles()
Object.assign(myObject, Vehicles.prototype.NewVehicle); 
Object.assign(myObject, Vehicles.prototype.NewInsight); 

console.log(myObject.shit('hoes have to eat too'))
console.log(myObject.shit('hoes have to pay too'))


let mercedes = new Vehicles(150, 1000)

console.log(mercedes)

class Pimp {
  constructor(name, vibration) {
    this.name = name;
    this.vibration = vibration;
  }

  getName(name) { 
    console.log(name)
  }

  getVibration(vibration) {
    console.log(vibration)
  }
}

class PimpJoel extends Pimp {
  constructor(name) {
    super(name)
  }
  getName(name) {
    console.log('You are not about that lyfe!', name)
  }
}


pimp = new Pimp() 

console.log(pimp.getName('Jessica'))

pimp2 = new PimpJoel()
console.log(pimp2.getName('wifey'))

