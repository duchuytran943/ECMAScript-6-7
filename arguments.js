/**
 * arguments
 */
function sum() {
  console.log(arguments); // in ra arguments của func
  console.log(arguments.length); // 4 => arguments la 1 array like object
}
function test() {
  console.log("HIHI");
}
sum(1, 2, 3, 7, test); //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 7 }

/**
 * example 1 - function sum arguments
 */
// function sum() {
//   console.log(arguments);
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }
// console.log(`Sum : ${sum(1, 2, 4, 56, 7, 5, 6)} `);

/**
 * example 2 - biến đổi arguments thành array
 */
// function sum() {
//   console.log(arguments);
//   const numbers = Array.from(arguments); //biến arguments thành 1 array
//   console.log(numbers);
//   return numbers.reduce((sum, num) => {
//     return sum + num;
//   }, 0);
// }
// console.log(`Sum : ${sum(1, 2, 4, 56, 7, 5, 6)} `);
