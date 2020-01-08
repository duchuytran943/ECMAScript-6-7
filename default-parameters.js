/**
 * default parameters
 */
function greeting(name = "friend") {
  return `Hi, ${name}`;
}
console.log(greeting()); // Hi, friend
console.log(greeting('Huy')); //Hi, Huy
