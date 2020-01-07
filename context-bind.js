// var mouse = {
//   name: "Huy",
//   sayHi: function() {
//     console.log("My name is", this.name);
//   }
// };
// // mouse.sayHi();
// var say = mouse.sayHi; // say = function(){console.log...}
// say();

{
  var mouse = {
    name: "Huy",
    sayHi: function() {
      console.log("My name is", this.name);
    }
  };
  var cat = {
    name: "tom"
  }
  var say = mouse.sayHi.bind(cat) //bind sẽ trả về hàm hoạt động giống sayHi. cat sẽ thành this ở sayHi
  // nếu không có bind(cat) thì say() sẽ My name is undefine
  say(); // My name is tom
}