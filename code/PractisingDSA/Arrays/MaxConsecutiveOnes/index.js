function MaxConsecutiveOnes(nums, n) {
  let count = 0;
  let maxValue = Number.MIN_VALUE;

  for (let i = 0; i < n; i++) {
    if (nums[i] == 1) {
      count++;
    } else {
      count = 0;
    }
    maxValue = Math.max(maxValue, count);
  }
  return maxValue;
}
let arr = [1, 1, 0, 1, 1, 1];
let n = arr.length;
const res = MaxConsecutiveOnes(arr, n);
console.log(res);
