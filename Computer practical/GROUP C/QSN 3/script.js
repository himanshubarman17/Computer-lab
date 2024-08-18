//using object literals
const order = {
    name: "pizza",
    price: 300,
    order_call: function() {
      console.log(`your order of ${this.name} has been completed please do the payment of rs. ${this.price}`);
    }
  };
  

    console.log(order.name); 
    order.order_call(); 

//using new object
const car = new Object();
car.company = "Toyota";
car.model = "Camry";
car.year = 2022;

console.log(car.company); // Output: Toyota
console.log(car.year); // Output: 2022

//using a constructor function
function animal(name, species) {
    this.name = name;
    this.species = species;
    this.sound = function() {
      console.log(`${this.name} makes a sound!`);
    };
  }
  
  const dog = new animal("Buddy", "Dog");
  console.log(dog.name); // Output: Buddy
  dog.sound(); // Output: Buddy makes a sound!

  //Using es6 classes
  class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
  
    study() {
      console.log(`${this.name} is studying.`);
    }
  }
  
  const student1 = new Student("Alice", "A");
  console.log(student1.name); // Output: Alice
  student1.study(); // Output: Alice is studying.
    
  //using object.create
  const personPrototype = {
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  const person1 = Object.create(personPrototype);
  person1.name = "Sarah";
  person1.greet(); // Output: Hello, my name is Sarah
  
  

