// let x = prompt('enter array1')
//     .split(' ')
//     .map((el) => +el),
//   y = prompt('enter array2')
//     .split(' ')
//     .map((el) => +el);

let x = [3, 6, 7, 8, 10, 12, 15, 18, 100],
  y = [1, 2, 3, 5, 7, 9, 10, 11, 15, 16, 18, 25, 50];

let i = 0,
  j = 0;

let res = 0,
  sum1 = 0,
  sum2 = 0;

while (i < x.length && j < y.length) {
  if (x[i] < y[j]) {
    sum1 += x[i++];
  } else if (x[i] > y[j]) {
    sum2 += y[j++];
  } else {
    res += Math.max(sum1, sum2) + x[i];

    sum1 = 0;
    sum2 = 0;
    i++;
    j++;
  }
}

while (i < x.length) {
  sum1 += x[i];
  i++;
}

while (j < y.length) {
  sum2 += y[j];
  j++;
}

res += Math.max(sum1, sum2);

console.log(res);
