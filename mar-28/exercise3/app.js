let num1 = parseInt(prompt('enter num 1')),
  num2 = parseInt(prompt('enter num 2'));

let check = (num1, num2) => {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) return true;
  else return false;
};

alert(check(num1, num2));
