/**
 * closure: function return function
 * garbage collector: check biến nào k đc dùng nữa thì bỏ ra khỏi bộ nhớ.
 * design patterns: function factory(factory methods)
 */
// function sum(a, b) {
//   const c = a + b;
//   return function() {
//     //function này có thể truy cập những biến ở trong sum
//     console.log(c);
//   };
// }
// sum(1, 2)(); //phải có thêm dấu () ở cuối để có thể chạy function trả về

/**
 * example 2
 */
function debug(name){
  return function(str){
    console.log(`[${name}] ${str}`)
  };
}
const log = debug('Mouse') //sẽ trả về 1 cái function
log('Error happened')//thực hiện function
