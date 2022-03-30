let nums = prompt('enter an array')
    .split(' ')
    .map((el) => +el),
  target = parseInt(prompt('enter the target'));

let run = (nums, target) => {
  for (let element of nums) {
    if (nums.indexOf(target - element))
      return `Pair found (${element} , ${target - element})`;
  }

  return 'Pair not found';
};

console.log(run(nums, target));
