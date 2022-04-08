// function* naturalNum() {
//   let num = 1;
//   while (num) {
//     yield num++;
//   }
// }

function* powerSeries(num, pow) {
  while (num) {
    let res = num ** pow;
    yield res;
    num++;
  }
}

function* displayData(limit, callback) {
  while (limit--) {
    yield* callback;
  }
}

// // displayData(7, naturalNum());
let data = displayData(7, powerSeries(3, 2));
// let data = displayData(3, ["a", "b", "c", "d", "e", "f"]);
console.log(data.next());

// function* displayData(limit, args) {
//   for (let i = 0; i < limit; i++) {
//     yield args[i];
//   }
// }
