function RotateArryByKElements(nums, n) {
  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
  k = k % nums.length;
  // REverse the whole array
  reverse(0, nums.length - 1);
  // Reverse the first k elements
  reverse(0, k - 1);
  // Reverse the remaining elements
  reverse(k, nums.length - 1);
  console.log(nums);
}

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
RotateArryByKElements(nums, k);
