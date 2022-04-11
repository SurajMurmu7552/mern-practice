// get table with id ="age-table"

// let table = document.getElementById("age-table");
// console.log(table);

/*-----------------------------------------------------------*/

//all label elements inside the table
// let tableElements = document.getElementsByName("table-row");

// let tableElements = document.getElementsByClassName("table-row");

// let tableElements = document.querySelectorAll(".table-row");

// console.log(tableElements);

/*----------------------------------------------------------*/

//get first td in the table

/*--------------------------------------------------------*/

//get the form with name = search

let form = document.getElementsByName("search");

console.log(form);

/*----------------------------------------------------*/

//get first input in the form

let firstInput = form[0].firstElementChild;

console.log(firstInput);

/*----------------------------------------------------*/

//get the last input of the form

let lastInput = form[0].lastElementChild;
console.log(lastInput);
