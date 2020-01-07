/**
 * example 1 - Khai báo lại
 */
// {
//   const a = 1;
//   const a = 4; //sẽ báo lỗi declared
//   let b = 2;
//   let b = 3; //sẽ báo lỗi đã declared
// }

/**
 * example 2 - Không có hành vi hoisting
 */
// {
//   function run(){
//     console.log(a)
//     const a = 1; // Error  Cannot access 'a' before initialization.
//     //Lỗi tương tự đối với let
//   }
//   run()
// }

/**
 * example 3 - block scope
 */
for(let i = 0; i < 5; i ++){
  console.log(i)
}
console.log(i); //Se bao loi not defined
