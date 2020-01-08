/**
 * apply
 */
function sum() {
  const numbers = Array.from(arguments);
  return numbers.reduce((sum, num) => sum + num, 0);
}
function average() {
  //sum
  const x = sum.apply(null, arguments); // arguments thỏa mãn yêu cầu ở vị trí thứ 2 của apply (arry-like object)
  //average
  return x / arguments.length;
}
console.log(sum(1, 2, 3, 6));
console.log(average(1, 2, 3, 6));
