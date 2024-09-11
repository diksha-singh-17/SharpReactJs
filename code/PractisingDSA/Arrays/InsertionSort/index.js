function InsertionSort(nums, n) {
  for (let i = 1; i < n; i++) {
    let j = i;
    while (j > 0 && nums[j - 1] > nums[j]) {
      [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
      j--;
    }
  }
  console.log(nums);
}

let arr = [22, 1, 14, 9, 0, 28];
let n = arr.length;
InsertionSort(arr, n);
