let ar1 = prompt('enter an array 1')
  .split(' ')
  .map((el) => +el);
let ar2 = prompt('enter an array 2')
  .split(' ')
  .map((el) => +el);

let run = (ar1, ar2) => {
  for (let element of ar1) {
    console.log(element);
    if (ar2.indexOf(element) > -1) {
      return true;
    }
  }
  return false;
};

console.log(run(ar1, ar2));
