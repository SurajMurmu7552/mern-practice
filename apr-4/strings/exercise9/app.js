let sen = prompt("Enter a sentence"),
  str = prompt("Enter a string to search");

let remOcc = (s, st) =>
  s.slice(0, s.match(st).index) + s.slice(s.match(st).index + st.length + 1);

console.log(remOcc(sen, str));
