class Foo {
  static someMethod() {
    console.log("some method");
  }
  anotherMethod() {
    console.log("another method");
  }
}
Foo.someMethod(); // some method
// Foo.anotherMethod() // error
const foo = new Foo(); //instance
foo.anotherMethod(); //run ok
