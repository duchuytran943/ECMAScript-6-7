/**
 * class - inheritance
 */

// // Example 1 dùng class để viết.
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eatting...`);
  }
}
class Bird extends Animal {
  fly() {
    console.log(`${this.name} flying....`);
  }
}
class Vet extends Bird {
  speak() {
    console.log(`${this.name} speaking....`);
  }
}
const bird = new Vet("Huy");
bird.speak();


// // // Dùng Constructor để viết lại như các class trên.
// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.eat = function() {
//   console.log(`${this.name} eatting...`);
// };


// function Bird(name) {
//   Animal.apply(this, arguments);
//   /**
//    * apply gọi hàm đó và trả về giá trị của hàm đó.
//    * -> apply sẽ gọi Animal, this ở đây sẽ là của Bird, arguments là name của Bird.
//    * => constructor này sẽ thừa kế những thuộc tính của constructor Animal
//    */
// }
// Bird.prototype = new Animal(); //Bird sẽ thường kế các methods của Animal
// // // Muốn thêm methods mới cho Bird thì ta sẽ Bird.prototype.fly = ...
// Bird.prototype.fly = function() {
//   console.log(`${this.name} flying...`);
// };


// function Vet(name) {
//   Bird.apply(this, arguments);
// }
// Vet.prototype = new Bird();
// Vet.prototype.speak = function() {
//   console.log(`${this.name} speaking...`);
// };

// const bird = new Vet("Huy");
// bird.speak();
