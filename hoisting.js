/**
 * hoisting in block
 */
// console.log(x); //undefine
// var x = 5;
// console.log(x); //5

/**
 * hoisting in block and function
 */
var x = 5;
function run() {
  console.log(x);
  /**
   nếu hàm quá dài & người dùng không để ý và khai báo 1 biến x mới ở trong khi ở trên có câu lệnh đã sử dụng biến x => sẽ dẫn tới x bị undefine
  */
  var x = 10;
}
run();
