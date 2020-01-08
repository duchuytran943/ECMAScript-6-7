/**
 * destructuring for array
 */
// const arr = [10, 20, 30, 40, 50];
// const [a, , , d] = arr;
// console.log(a, d); //10 40
// const [A, ...B] = arr;
// console.log(A, B); //10 [ 20, 30, 40, 50 ]

/**
 * destructuring for object
 */
const obj = {
  a: 1,
  b: 2,
  c: 3
};
// const { a, b, c } = obj;
// console.log(a, b, c); //1 2 3
const { a, ...b } = obj;
console.log(a, b); //1 { b: 2, c: 3 }
