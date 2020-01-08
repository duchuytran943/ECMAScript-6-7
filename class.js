/**
 * class
 */

// //Constructor function
// function Mouse(name) {
//   this.name = name;
// }
// Mouse.prototype.run = function() {
//   console.log(`${this.name} is running`);
// };
// const mouse = new Mouse("Mickey");
// mouse.run();

// // Dung class - se ra ket qua tuong tu nhu tren
class Mouse {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} is running`);
  }
}
const mouse = new Mouse("Mickey");
mouse.run();
