let arr = [2, 7, 4, 0, 9, 5, 1, 3];

let target = 20;

function findPairs(nums, sum) {
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          if (nums[i] + nums[j] + nums[k] + nums[l] === sum) {
            ans.push([nums[i], nums[j], nums[k], nums[l]]);
          }
        }
      }
    }
  }

  console.log(ans);
}

findPairs(arr, target);
