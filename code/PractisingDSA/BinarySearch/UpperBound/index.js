// function Upperbound(nums, target, n) {
//   let left = 0;
//   let right = n - 1;
//   let ans = n;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] <= target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//       ans = mid;
//     }
//   }
//   return ans;
// }
var upperBound = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = nums.length;
  // console.log(target);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // console.log(mid, target);
    if (nums[mid] > target) {
      // console.log("ans", mid);
      ans = mid;
      right = mid - 1;
    } else {
      // console.log("not ans", mid);
      left = mid + 1;
    }
  }
  return ans;
};
let arr = [1, 2, 3, 3, 5, 6, 8];
let n = arr.length,
  x = 3;
const res = upperBound(arr, x);
console.log(res);
