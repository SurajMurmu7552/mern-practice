let form = document.getElementById("sumForm");

form.onsubmit = function (e) {
  e.preventDefault();

  let num1 = document.getElementById("num1"),
    num2 = document.getElementById("num2");

  let sum = +num1.value + +num2.value;

  let div = document.createElement("div");
  div.innerHTML = `sum of ${num1.value} & ${num2.value} is ${sum}`;

  form.append(div);

  num1.value = null;
  num2.value = null;
};
