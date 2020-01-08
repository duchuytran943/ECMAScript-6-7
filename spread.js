/**
 * ...spread   (lan tràn, trải ra)
 */
// const a = [1, 2, 3];
// const b = [0, a, 4];
// const c = [0, ...a, 4];
// console.log(b);
// console.log(c);

/**
 * spread object
 */
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: { e: 10 }
};
// let obj2 ={}
// for(let key in obj1){
//   obj2[key] = obj1[key]  //shallow clone
// }
// => tương đương với
// let obj2 = {
//   ...obj1    //shallow clone
// };
let obj2 = {
  ...obj1,
  z: 1000
};
console.log({ obj1, obj2 });
obj2.c = 20; //obj2 thay doi c:20 obj1 không thay đổi.
obj2.d.e = 1000; //obj1 va obj2 cung thay doi e:1000. nên lưu ý khi sử dụng
console.log({ obj1, obj2 });
