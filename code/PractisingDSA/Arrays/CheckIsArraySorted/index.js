function CheckIsArraySorted(nums, n) {
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
    } else {
      return false;
    }
  }
  return true;
}
let arr = [1, 2, 3, 44, 6, 7];
let n = arr.length;

const res = CheckIsArraySorted(arr, n);
console.log(res);
