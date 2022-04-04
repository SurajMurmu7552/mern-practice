let str = prompt("Enter a string"),
  word = prompt("Enter a word");

let findWord = (s, w) => s.match(w).index;

console.log(`Word found at ${findWord(str, word) + 1} position`);
