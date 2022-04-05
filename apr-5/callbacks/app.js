//Exercise 1

// let getNum = (callback) => {
//   let num = Number(prompt("enter a num to check odd or even"));

//   alert(callback(num));
// };

// let oddOrEven = (num) => (num % 2 === 0 ? "is Even " : "is Odd");

// getNum(oddOrEven);

/*-----------------------------------------------------*/

// Exercise 2

// let getStr = (callback) => {
//   let str = prompt("Enter a string ");

//   alert(callback(str));
// };

// let addEx = (str) => str + "!";

// getStr(addEx);

/*---------------------------------------------------------------*/

//Exercise 3

// let getStr = (callback) => {
//   let str = prompt("Enter a string");

//   alert(callback(str));
// };

// let duplicate = (str) =>
//   str
//     .split("")
//     .map((s) => s.repeat(2))
//     .join("");

// getStr(duplicate);

/*-----------------------------------------------------*/

// Exercise 4

// let atLeastTwo = (arr, callback) => {
//   let count = 0;
//   arr.forEach((num) => (callback(num) ? count++ : undefined));

//   return count >= 2 ? true : false;
// };

// let oddOrEven = (num) => (num % 2 === 0 ? true : false);

// let boolVal = atLeastTwo([1, 3, 2, 5, 6], oddOrEven);

// console.log(boolVal);

/*----------------------------------------------------------------*/

//Exercise 5

// let groupBy = (callback) => {
//   let arr = prompt("Enter element of arr separated by space")
//     .split(" ")
//     .map((el) => +el);

//   let first = arr.filter((el) => callback(el));
//   let second = arr.filter((el) => !callback(el));

//   console.log("The first group is", first);
//   console.log("The second group is", second);
// };

// let oddOrEven = (num) => (num % 2 === 0 ? true : false);

// groupBy(oddOrEven);

/*--------------------------------------------------------------------------*/
