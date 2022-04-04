let array = prompt("Enter an array")
  .split(" ")
  .map((el) => +el);

function removeDuplicate(arr) {
  return Array.from(new Set(arr));
}

console.log(removeDuplicate(array));
