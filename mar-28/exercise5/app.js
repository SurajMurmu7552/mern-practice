let str = prompt('enter a string'),
  ch = prompt('enter a chracter');
i = str.indexOf(ch);

console.log(str.slice(0, i) + str.slice(i + 1));
