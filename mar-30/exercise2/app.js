let nums = prompt('Enter an array')
  .split(' ')
  .map((el) => +el);

let run = (nums) => {
  let change = true;
  for (let i = 0; i < nums.length - 1; i++) {
    let min = Math.min(nums[i], nums[i + 1]),
      max = Math.max(nums[i], nums[i + 1]);
    if (change === true) {
      nums[i] = min;
      nums[i + 1] = max;
      change = false;
    } else {
      nums[i] = max;
      nums[i + 1] = min;
      change = true;
    }
  }
  return nums;
};

console.log(run(nums));
