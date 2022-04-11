let stock = [1, 5, 2, 3, 7, 6, 4, 5];
// let stock = [10, 8, 6, 5, 4, 2];

// let stock = [10, 22, 5, 75, 65, 80];
// let stock = [100, 180, 260, 310, 40, 535, 695];

// function profitEarned(arr) {
//   let buy,
//     sell,
//     profit = 0;
//   let b = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1] && b === false) {
//       buy = i;
//       b = true;
//     }
//     if (
//       (arr[i] > arr[i + 1] && b === true) ||
//       (i === arr.length - 1 && b === true)
//     ) {
//       sell = i;
//       b = false;
//       if (buy < sell) {
//         profit += arr[sell] - arr[buy];
//       }
//     }

//   }
//   console.log(profit);
// }

function profitEarned(arr) {
  let profit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      profit += arr[i] - arr[i - 1];
    }
  }

  console.log(profit);
}

profitEarned(stock);
