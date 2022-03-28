let nums = prompt('enter numbers')
  .split(' ')
  .map((el) => +el);

let run = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 10 != nums[i - 1] % 10) return false;
  }
  return true;
};

alert(run(nums));
