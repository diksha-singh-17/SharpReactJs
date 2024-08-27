function SingleElementInSortedArray(nums, n) {
  let low = 1;
  let high = n - 2;

  if (nums[0] !== nums[1]) return arr[0];
  if (nums[n - 1] !== nums[n - 2]) return arr[n - 1];

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
      return nums[mid];
    }
    if (
      (mid % 2 === 1 && nums[mid] == nums[mid - 1]) ||
      (mid % 2 == 0 && nums[mid] == nums[mid + 1])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

let arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 7, 9, 9];
// output=7
let n = arr.length;
const res = SingleElementInSortedArray(arr, n);
console.log(res);
