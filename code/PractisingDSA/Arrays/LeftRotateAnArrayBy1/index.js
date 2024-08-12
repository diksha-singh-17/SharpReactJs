function LeftRotateAnArrayBy1(nums, n) {
  let temp = nums[0];
  for (let i = 1; i < n; i++) {
    nums[i - 1] = nums[i];
  }
  nums[n - 1] = temp;
  return nums;
}
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
const res = LeftRotateAnArrayBy1(arr, n);
console.log(res);
