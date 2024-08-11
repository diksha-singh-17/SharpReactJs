// O(N)
// O(1)
function RemoveDuplicatesFromSortedArray(nums, n) {
  let i = 0;
  for (let j = 0; j < n; j++) {
    if (nums[j] != nums[i]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }
  console.log(i + 1);
}

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let n = arr.length;
RemoveDuplicatesFromSortedArray(arr, n);
