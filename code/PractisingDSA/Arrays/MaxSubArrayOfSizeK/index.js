// In a given array find subarray of size 3 who has maximum sum'

function slidingWindowMaxSum(nums) {
  let i = 0;
  let j = 0;
  let maxSum = 0;
  let sum = 0;
  // console.log(nums.length-1);
  while (j < nums.length) {
    sum = sum + nums[j];
    // console.log("sum", sum);
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      maxSum = Math.max(maxSum, sum);
      sum = sum - nums[i];
      i++;
      j++;
    }
  }
  console.log(maxSum);
}

let arr = [2, 4, 5, 3, 4, 1, 2, 12];
let k = 3;
slidingWindowMaxSum(arr);
