function LargestInAnArray(nums, n) {
  let max = nums[0];
  for (let i = 0; i < n; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  console.log(max);
}
let arr = [1, 8, 7, 56, 90];
let n = arr.length;
LargestInAnArray(arr, n);
