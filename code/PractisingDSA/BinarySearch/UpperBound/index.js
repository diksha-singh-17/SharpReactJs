function Upperbound(nums, target, n) {
  let left = 0;
  let right = n - 1;
  let ans = n;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
      ans = mid;
    }
  }
  return ans;
}
let arr = [1, 2, 3, 5, 9];
let n = arr.length,
  x = 3;
const res = Upperbound(arr, x, n);
console.log(res);
