function BubbleSort(nums, n) {
  for (let i = 0; i < n - 1; i++) {
    let didSwap = 0;
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        didSwap = 1;
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
    if (didSwap == 0) {
      break;
    }
  }
  console.log(nums);
}

let arr = [19, 3, 9, 0, 22, 28, 19, 13];
let n = arr.length;
BubbleSort(arr, n);

// 0(N)- if array is sorted (best case)
// 0(N2) -if array is not sorted
