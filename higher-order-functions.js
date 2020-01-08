/**
 * nhận 1 func làm tham số hoặc trả về 1 func -> higher order function
 */
function waitAndRun(ms, func) {
  //waitAndRun là higher order function
  setTimeout(func, ms);
}
function run() {
  console.log("Run");
}
waitAndRun(2000, run);
