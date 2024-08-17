var insertPosition = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    }
  }

  return ans;
};

let arr = [1, 3, 5, 6];

let target = 2;

// Output : 2
const res = insertPosition(arr, target);
console.log(res);
