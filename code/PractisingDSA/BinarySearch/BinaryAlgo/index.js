function BinaryAlgo(nums, target) {
  let low = 0;
  let n = nums.length;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

let arr = [3, 4, 6, 7, 8, 9];
let target = 0;
const res = BinaryAlgo(arr, target);
console.log(res);
