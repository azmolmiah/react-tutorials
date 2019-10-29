// // Const & Let

// // Arrow Functions

// const fruits = ['Apples', 'Oranges', 'Grapes'];
// // Foreach
// // fruits.forEach(fruit => console.log(fruit));

// // Map -  returns an array and change or do something to any of the item
// const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());
// //console.log(singleFruit);

// // Filter
// const people = [
//   { id: 1, name: 'Az' },
//   { id: 2, name: 'Miah' },
//   { id: 3, name: 'Ali' }
// ];

// const people2 = people.filter(person => person.id !== 2);
// //console.log(people2);

// // Spread arrays or objects
// const arr = [1, 2, 3];
// const arr2 = [...arr, 4];
// const arr3 = [...arr.filter(num => num !== 2)];
// //console.log(arr3);

// // console.log(arr2);
// const person = {
//   name: 'Az',
//   age: 28
// };

// const person2 = {
//   ...person,
//   email: 'azmol@azmol.com'
// };

//console.log(person2);

// Destructuring

// const profile = {
//   name: 'John Doe',
//   address: {
//     street: '40 main street',
//     city: 'Boston'
//   },
//   hobbies: ['movies', 'music']
// };

// const { name, address, hobbies } = profile;
// const { street, city } = profile.address;
// //console.log(street, city);

// // Classes
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello, my name is ${this.name} and I am ${this.age}`;
//   }
// }

// const person = new Person('John', 38);
// const person2 = new Person('Sarah', 28);

// //console.log(person2.greet());

// // Sub Classes
// class Customer extends Person {
//   constructor(name, age, balance) {
//     super(name, age);
//     this.balance = balance;
//   }

//   info() {
//     return `${this.name} owes ${this.balance}`;
//   }
// }

// const customer = new Customer('Kevin', 32, 300);

// console.log(customer.info());

// Modules
