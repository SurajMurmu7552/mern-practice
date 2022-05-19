const { add, subtract, multiply, divide, remainder } = require("./calculator");

let a = 2,
  b = 10;

console.log("add", add(a, b));
console.log("subtract", subtract(a, b));
console.log("multiply", multiply(a, b));
console.log("divide", divide(a, b));
console.log("remainder", remainder(a, b));
