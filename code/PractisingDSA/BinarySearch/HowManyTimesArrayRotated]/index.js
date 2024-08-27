function Rotated(nums, n) {
  let low = 0;
  let high = n - 1;
  let ans = Number.MAX_VALUE;
  let index = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[low] <= nums[high]) {
      if (nums[low] < ans) {
        ans = nums[low];
        index = low;
      }
    }
    if (nums[low] <= nums[mid]) {
      if (nums[low] < ans) {
        ans = nums[low];
        index = low;
      }

      low = mid + 1;
    } else if (nums[mid] <= nums[high]) {
      if (nums[mid] < ans) {
        ans = nums[mid];
        index = mid;
      }

      high = mid - 1;
    }
  }
  return index;
}
let arr = [3, 4, 5, 8, 23, 45, 1, 2];
let n = arr.length;
// Output: 6
const res = Rotated(arr, n);
console.log(res);
