let arr = [1, 3, 5, 7];

function addEle(array, ele) {
  let arr = [];
  for (let i = 0; i < array.length; i++) arr[i] = array[i];
  arr[array.length] = ele;
  return arr;
}

function removeEleFromBack(array) {
  let arr = [];
  for (let i = 0; i < array.length - 1; i++) arr[i] = array[i];
  return arr;
}

function addEleToFront(array, ele) {
  let arr = [ele];
  for (let i = 0; i < array.length; i++) arr[i + 1] = array[i];
  return arr;
}

function removeEleFromFront(array) {
  let arr = [];
  for (let i = 1; i < array.length; i++) arr[i - 1] = array[i];
  return arr;
}

function arrToStr(array) {
  let str = "";
  for (let i = 0; i < array.length; i++) str += array[i];
  return str;
}

function strToArr(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) arr.push(parseInt(str[i]));
  return arr;
}

console.log(addEle(arr, 4));
console.log(removeEleFromBack(arr));
console.log(addEleToFront(arr, 9));
console.log(removeEleFromFront(arr));

console.log(arr);

let str = "123456789";

console.log(arrToStr(arr));
console.log(strToArr(str));
