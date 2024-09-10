var runningSum = function (nums) {
  let r = 1;
  let n = nums.length;
  console.log(nums);

  while (r < n) {
    nums[r] = nums[r] + nums[r - 1];
    r = r + 1;
  }
  return nums;
};

let nums = [3, 1, 2, 10, 1, 4, 6, 7];
const result = runningSum(nums);
console.log(result);
