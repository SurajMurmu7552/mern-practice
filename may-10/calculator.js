const add = (a, b) => {
  return Number(a) + Number(b);
};

const subtract = (a, b) => {
  return Number(a) - Number(b);
};

const multiply = (a, b) => {
  return Number(a) * Number(b);
};
const divide = (a, b) => {
  return Number(a) / Number(b);
};
const remainder = (a, b) => {
  return Number(a) % Number(b);
};

module.exports = { add, subtract, multiply, divide, remainder };
