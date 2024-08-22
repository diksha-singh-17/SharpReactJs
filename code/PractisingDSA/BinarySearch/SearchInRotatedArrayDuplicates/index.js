function Search(nums, k) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === k) return mid;
    if ((nums[mid] === nums[low]) === nums[high]) {
      low = low + 1;
      high = high + 1;
      continue;
    }
    // left half sorted
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= k && k <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // right half sorted
      if (nums[mid] <= k && k <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}
let arr = [4, 4, 12, 15, 4, 4, 1, 2, 4],
  k = 1;
// output=3
const res = Search(arr, k);
console.log(res);
