// blueprint ()

// Animals (legs, mouth, eyes, breath: land + water)
//--> amphibian (legs, mouth, eyes) + breath (water & land)
// --> fish (mouth, eyes) + breath (water) + fins
// --> bird (mouth, legs, eyes) + breath (land) + wings

class Animal {
  constructor(name, legs, breath) {
    this.name = name;
    this.legs = legs;
    this.breath = breath;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }

  cry() {
    console.log(this.name + " is crying!!!");
  }
}

class Dog extends Animal {
  constructor(name, legs, paw) {
    super(name, legs);
    this.paw = paw;
  }

  speak() {
    console.log(this.name + " barks.");
  }
}

class Fish extends Animal {
  constructor(name, legs, fins) {
    super(name, legs);
    this.fins = fins;
  }

  speak() {
    console.log(`${this.name} Gullppp!`);
  }
}

const doggy = new Dog("Grizzly", 4, true);
const fishy = new Fish("Fluffertons", 0, 2);

console.log(doggy);
console.log(fishy);
