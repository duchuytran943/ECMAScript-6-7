/**
 * methods-overriding
 */
class CoffeeMachine {
  makeCoffee() {
    console.log("making coffee...");
  }
}
class SpecialCoffeeMachine extends CoffeeMachine {
  makeCoffee(cbFunc) {
    console.log("making spectial coffee and do somethings...");
    cbFunc();
  }
}
const coffeeMachine = new SpecialCoffeeMachine();
coffeeMachine.makeCoffee(function() {
  console.log("Call the  boss...");
});
