let array = prompt("enter an array")
  .split(" ")
  .map((el) => +el);

function sumAndProduct(arr) {
  let sum = 0,
    product = 1;
  arr.forEach((el) => {
    sum += el;
    product *= el;
  });
  return [sum, product];
}

let [sum, product] = sumAndProduct(array);
console.log("Sum = ", sum, "Product = ", product);
