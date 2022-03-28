let nums = prompt('enter nums')
  .split(' ')
  .map((el) => +el);
console.log(nums);

let run = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 50 && nums[i] < 99) return true;
  }
  return false;
};

alert(run(nums));
console.log(run(nums));
