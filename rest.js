/**
 * rest  (phần còn lại)
 */
// function log(a, ...numbers) {
//   // // a là prama đầu tiên
//   // // ...numbers: là rest
//   console.log(a);
//   console.log(numbers);
// }
// log(1, 2, 3, 4, 5); // a =1; numbers = [2,3,4,5]

/**
 * ứng dụng 1
 */
// function sum(...nums) {
//   return nums.reduce((sum, num) => {
//     return sum + num;
//   }, 0);
// }
// console.log(sum(1,2,3))

/**
 * ứng dụng 2
 */
function concat(separator, ...strings) {
  return strings.join(separator);
}
console.log(concat(".", "a", "b", "c"));
