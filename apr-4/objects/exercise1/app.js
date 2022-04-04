let obj = {
  name: "Joe",
  age: 90,
  alive: true,
};

function lengthOfObj(object) {
  return Object.entries(object).length;
}

console.log(lengthOfObj(obj));
