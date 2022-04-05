// Exercise 1

let fetchData1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});

// fetchData1.then((str) => alert(str)).catch((err) => console.log(err));

/*------------------------------------------------------------------------*/

// Exercise 2

let fetchData2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved!");
  }, 1000);
});

// fetchData2.then((str) => console.log(str)).catch((err) => console.error(err));

/*-----------------------------------------------------------------------------------------*/

// Exercise 3

let fetchData3 = new Promise((resolve, reject) => {
  reject("Rejected!");
});

// fetchData3.catch((err) => console.log(err));

/*-----------------------------------------------------------------*/

// Exercise 4
//Question was not clear

let fetchData4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise has been resolved");
  }, 1000);

  console.log("not a promise");
});

// fetchData4.then((str) => console.log(str));

/*----------------------------------------------------------------*/

// Exercise 5

let fetchData5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello there");
  }, 1000);
});

// let displayData = () => {
//   fetchData5.then((str) => console.log(str));
// };

// setTimeout(displayData, 2000);

/*--------------------------------------------------------*/

// Exercise 6

let secondPromise = new Promise((resolve, reject) => {
  resolve("Second!");
});
let firstPromise = new Promise((resolve, reject) => {
  resolve(secondPromise);
});

// firstPromise.then((second) => console.log(second));

Promise.all([
  fetchData1,
  fetchData2,
  //rejected promise
  fetchData3,
  fetchData4,
  fetchData5,
  firstPromise,
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
//   .then((res) => console.log(res));

// if fetchData3 is not called

// output -
//   ["Hello", "Resolved!", "Promise has been resolved", "hello there", "Second!"];

// if fetchData3 is called
// only rejected value is shown

// output - Rejected!
