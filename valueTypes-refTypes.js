/**
 * example 1
 */
// let a1 = 1;
// let a2 = 1;
// console.log(a1 === a2); //true
// let obj1 = { a: 1 };
// let obj2 = { a: 1 };
// console.log(obj1 === obj2); //false

/**
 * example 2
 */
// let a1 = 1;
// let a2 = 1;
// let a3 = a2;
// a3 = 2;
// console.log(a2); // 1
// let obj1 = { a: 1 };
// let obj2 = { a: 1 };
// let obj3 = obj2;
// obj3.a = 2;
// console.log(obj2); //{a:2} //vì obj3 & 3 cùng ref tới cùng 1 địa chỉ.

/**
 * example 3
 */
// let a1 = 1;
// let a2 = 1;
// let a3 = a2;
// console.log(a3 === a2); // true
// a3 = 2;
// console.log(a3 === a2); //false

// let obj1 = { a: 1 };
// let obj2 = { a: 1 };
// let obj3 = obj2;
// console.log(obj3 === obj2); //true
// obj3.a = 2;
// console.log(obj3 === obj2); //true

/**
 * example 4
 */
let obj1 = { a: 1 };
console.log(obj1);
function log(x) {
  x.b = 5;
}
log(obj1); // thay doi obj1 => cach lam nay nguy hiem, vi neu co nhieu cho cung sua thi de sai
// => viết hàm thì tránh thay đổi input, nhất là khi truyền object vào
console.log(obj1);
