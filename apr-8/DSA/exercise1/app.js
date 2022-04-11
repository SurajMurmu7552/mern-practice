//trains departure

let trainArrival = [2.0, 2.1, 3.0, 3.2, 3.5, 5.0];
let trainDeparture = [2.3, 3.4, 3.2, 4.3, 4.0, 5.2];

//number of platforms
// let platforms = 2;

// function getPlatforms(A, D) {
//   let ans = 1;
//   let plat = 1;
//   for (let i = 0; i < A.length; i++) {
//     plat = 1;
//     for (let j = i + 1; j < A.length; j++) {
//       if ((A[i] >= A[j] && A[i] <= D[j]) || (A[j] >= A[i] && A[j] <= D[i])) {
//         plat++;
//         console.log(plat);
//         console.log("train time", A[i], D[i]);
//       }
//     }
//     ans = Math.max(ans, plat);
//   }

//   console.log(ans);
// }

// function getPlatforms(A, D) {
//   A.sort((a, b) => a - b);
//   D.sort((a, b) => a - b);
//   let plat = 1,
//     ans = 1,
//     i = 0,
//     j = 0;
//   while (i < A.length && j < D.length) {
//     if (A[i] <= D[j]) {
//       plat++;
//       i++;
//     } else if (A[i] > D[j]) {
//       plat--;
//       j++;
//     }

//     ans = plat > ans ? plat : ans;
//   }

//   console.log(plat);
// }

function getPlatforms(A, D) {
  A.sort((a, b) => a - b);
  D.sort((a, b) => a - b);

  let plat = 1,
    i = 1,
    j = 0;
  while (i < A.length) {
    if (A[i] < D[j]) plat++;
    else j++;
    i++;
  }

  console.log(plat);
}

getPlatforms(trainArrival, trainDeparture);
