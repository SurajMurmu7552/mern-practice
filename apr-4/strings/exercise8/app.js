let str = prompt("Enter a string"),
  ch = prompt("Enter the specified character");

let specStr = (s, c) => s.slice(s.indexOf(c) + 1);

console.log(specStr(str, ch));
