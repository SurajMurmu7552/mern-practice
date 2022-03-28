let arr1 = prompt('enter arr1').split(' '),
  arr2 = prompt('enter arr2').split(' ');

let sum = [];
if (arr1.length > arr2.length) {
  sum = arr1.map((a, i) => {
    if (arr2[i] === undefined) return +a;
    return +a + +arr2[i];
  });
} else {
  sum = arr2.map((a, i) => {
    if (arr1[i] === undefined) return +a;
    return +a + +arr1[i];
  });
}

alert(`[${sum}]`);
