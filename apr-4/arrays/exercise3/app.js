let entry = prompt("Enter an array")
  .split(" ")
  .map((el) => +el);

function freq(arr) {
  let max = 0,
    res;
  let map = new Map();
  arr.forEach((el) => {
    if (map.has(el)) map.set(el, map.get(el) + 1);
    else map.set(el, 1);
  });

  map.forEach((val, key) => {
    if (val > max) {
      max = val;
      res = key;
    }
  });

  return res;
}

console.log(freq(entry));
