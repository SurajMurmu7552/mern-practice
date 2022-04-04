let entry = prompt("Enter a sentence");

let capitalize = (str) =>
  str
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.substr(1))
    .join(" ");

console.log(capitalize(entry));
