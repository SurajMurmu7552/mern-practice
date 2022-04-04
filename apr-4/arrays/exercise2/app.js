let entry = prompt("enter a number");

// function insertDash(arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0) {
//       str += arr[i] + "-";
//     } else str += arr[i];
//   }
//   return str;
// }

function insertDash(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] % 2 == 0 && +arr[i + 1] % 2 == 0) {
      arr.splice(i + 1, 0, "-");
    }
  }
  return arr.join("");
}

console.log(insertDash(entry));

// 025468;
