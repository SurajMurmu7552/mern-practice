let entry1 = prompt("Enter a string"),
  entry2 = prompt("Enter a string to insert"),
  n = 1 * prompt("Enter position");

let insertStr = (str, ins, pos = 1) =>
  str.slice(0, pos - 1) + ins + str.slice(ins.length - 1 + pos - 1);

console.log(insertStr(entry1, entry2, n));
