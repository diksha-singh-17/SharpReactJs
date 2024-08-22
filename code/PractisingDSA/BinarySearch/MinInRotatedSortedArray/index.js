function MinRotatedSortedArray(nums, n) {
  let low = 0;
  let high = n - 1;
  let ans = Number.MAX_VALUE;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[low] <= nums[high]) {
      ans = Math.min(ans, nums[low]);
      break;
    }
    if (nums[low] <= nums[mid]) {
      ans = Math.min(ans, nums[low]);
      low = mid + 1;
    } else if (nums[mid] <= nums[high]) {
      ans = Math.min(ans, nums[mid]);
      high = mid - 1;
    }
  }
  return ans;
}

let arr = [25, 30, 5, -1, 10, 15, 20];
let n = arr.length;
const res = MinRotatedSortedArray(arr, n);
console.log(res);
