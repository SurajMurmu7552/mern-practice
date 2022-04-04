let entry = prompt("Enter a string"),
  multiple = 1 * prompt("Enter the no. of times to repeat");

let concatenates = (str, n = 1) => str.repeat(n);

console.log(concatenates(entry, multiple));
