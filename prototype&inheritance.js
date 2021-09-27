function sayName(name) {
  console.log(this);
  return name;
}

// sayName("D'Artagnan");

const myObj = {
  greeting: "Hello",
  sayHello: function (name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  },
};
// myObj.sayHello("Ryan");

function CordialPerson(greeter) {
  this.greeting = "Hello ";
  this.greeter = greeter;
  this.speak = function () {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson("Newman");
const newman = new CordialPerson("Jerry");

// jerry.speak();
// console.log(jerry.greeting);
// newman.speak();

// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person1 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// const person2 = {
//   fullname: "testing",
// };

// const person3 = {
//   firstName: "Orwille",
//   lastName: "Mercado",
// };

// This will return "Mary Doe":
// Object reference????
// person.fullName.apply(person1);
// console.log(person.fullName.apply(person2));
// console.log(person.fullName.apply(person3));

const person = {
  fullName: function (firstName, lastName) {
    return firstName + " " + lastName;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = ["Mary", "Jane"];

// This will return "John Doe":
// console.log(person.fullName.call(person1));
// console.log(person.fullname.apply(person2));

// function Person(attributes) {
//   this.age = attributes.age;
//   this.name = attributes.name;
//   this.homeTown = attributes.homeTown;
//   // this.speak = function () {
//   //   return `Hello, my name is ${this.name}`;
//   // };
// }

// const fred = new Person({
//   age: 35,
//   name: "",
//   homeTown: "Bedrock",
// });

// console.log(fred.speak());
// console.log(fred.calculate());

Person.prototype.speak = function () {
  return `Hello, my name is ${this.name}`;
};

Person.prototype.calculate = function () {
  return "calculate";
};

function Person(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
  // this.speak = function () {
  //   return `Hello, my name is ${this.name}`;
  // };
}

function Child(childAttributes) {
  Person.call(this, childAttributes); // binding this to Person
  this.isChild = childAttributes.isChild; // this will be a special attribute to Child
}

Child.prototype = Object.create(Person.prototype); // hook/bind si child (prototype) sa person class (prototype)

const pebbles = new Child({
  age: 3,
  name: "Pebbles",
  homeTown: "Bedrock",
  isChild: true,
});

const fred = new Child({
  age: 35,
  name: "Fred",
  homeTown: "CDO",
  isChild: false,
});

console.log(pebbles.speak());
console.log(pebbles.isChild);
console.log(fred.isChild);
console.log(fred.speak());
