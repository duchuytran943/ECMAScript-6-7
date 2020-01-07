/**
 * fat arrow function
 */

// //Khai báo hàm có tên là sum
// function sum(a, b) {
//   return a + b;
// }
// sum(1,2)

// //Khai báo biến bằng 1 hàm
// var sum2 = function(a,b){
//   return a+b
// }
// sum2(3,2)

// var sum3 = (a, b) => {
//   return a + b;
// };
// sum3(3, 2);

// var sum4 = (a, b) => a + b;
// sum4(4, 3);

// var square = x => x * x;
// square(5);

// var doSomething = () => Date.now();
// doSomething();

// var arr = [1,2,3]
// console.log(arr.map(x => x*x))

/**
 * arrow function part 2
 */

// var a = {
//   name: "AAA",
//   run: function() {
//     var run2 = function() {
//       console.log(this.name);
//     }.bind(this); // this ở đây là biến a, nếu k bind thì ở đây context sẽ global
//     run2();
//   }
// };
// a.run();

// var a = {
//   name: "AAA",
//   run: function() {
//     var run2 = () => {
//       console.log(this.name); // arrow function không có context, nên biến this đó sẽ là biến this của cái context gần nhất (run)
//     };
//     run2();
//   }
// };
// a.run();


// var a = {
//   foo: 'bar',
//   run: function(){
//     setTimeout(function(){
//       console.log(this.foo)
//     },2000)
//   }
// }
// a.run() //ket qua se la undefine. cac cach duoi de fix

/**
 * Cach 1 - use bind
 */
// var a = {
//   foo: 'bar',
//   run: function(){
//     setTimeout(function(){
//       console.log(this.foo)
//     }.bind(this),2000)
//   }
// }
// a.run()

/**
 * Cach 1'
 */
// var a = {
//   foo: "bar",
//   run: function() {
//     setTimeout(
//       function() {
//         console.log(this.foo);
//       }.bind(a),
//       2000
//     );
//   }
// };
// a.run();

/**
 * Cach 2
 */
// var a = {
//   foo: "bar",
//   run: function() {
//     var that = this;
//     setTimeout(function() {
//       console.log(that.foo);
//     }, 2000);
//   }
// };
// a.run();

/**
 * Cach 3: use arrow function
 */
var a = {
  foo: 'bar',
  run: function(){
    setTimeout(()=>{
      console.log(this.foo)
    }, 2000)
  }
}
a.run()
