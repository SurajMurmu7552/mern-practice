let entry = prompt("Enter a string"),
  chop = 1 * prompt("Enter the choping nmber");

// let entry = "hello there my name is suraj murmu";

//removing space and showing results

let chunks = (str, n = 1) => {
  return [
    ...str
      .split(" ")
      .join("")
      .match(new RegExp(`.{1,${n}}`, "g")),
  ];
};

console.log(chunks(entry, chop));
