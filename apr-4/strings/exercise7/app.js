let str = prompt("Enter a string"),
  num = 1 * prompt("Enter the num for repeat");

let repeatStr = (s, n = 0) => s.repeat(n);

console.log(repeatStr(str, num));
