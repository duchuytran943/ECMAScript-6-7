/**
 * call()
 * call() gần tương tự với bind().
 * nhưng call sẽ thực hiện hàm đó, rồi trả về giá trị của hàm đó trả về.
 */
function greeting(language = "en") {
  console.log(`Hi ${this.name}. I am ${this.age}`);
  console.log(`language: ${language}`);
}
const cat = {
  name: "Tom",
  age: 4
};
// //tham số đầu tiên của call sẽ là sẽ đại diện cho this trong hàm, nếu k có thì truyền null
// //ở đây cat sẽ là this ở function trên.
greeting.call(cat, "vn"); //Hi Tom. I am 4 language: vn

