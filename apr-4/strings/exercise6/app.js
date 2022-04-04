let sentence = prompt("Enter a sentence"),
  str = prompt("Enter a string to search");

// let sentence = "hello there hello suraj hello you",
//   str = "hello";

let occurence = (sen, s) => [...sen.matchAll(s)].length;

console.log("Number of matches is/are", occurence(sentence, str));
