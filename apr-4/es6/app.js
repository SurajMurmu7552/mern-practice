// function Clock({ template }) {
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   this.stop = function () {
//     clearInterval(timer);
//   };

//   this.start = function () {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();

//Exercise 1

class Clock {
  //private variable
  #timer;

  //constructor
  constructor({ template }) {
    this.template = template;
  }

  //private methods

  #render = () => {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  };

  //public methods

  stop = () => {
    clearInterval(this.#timer);
  };
  start = () => {
    this.#render();
    this.#timer = setInterval(this.#render, 1000);
  };
}

//instantiate
const clock = new Clock({ template: "h:m:s" });
clock.start();

// Exercise 2

// let products = ["dell", "lenovo", "hp", "ps5", "xbox", " nintendo"];

// let checkout = [...products];
// console.log(checkout);

//Exercise 3

// let user = {
//   name: "josh",
//   age: 25,
//   sad: true,
// };

// let { name: firstName, age: howOld, sad: stillAlive } = user;

// console.log(firstName, howOld, stillAlive);
