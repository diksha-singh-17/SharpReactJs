function SelectionSort(nums, n) {
  for (let i = 0; i < n - 2; i++) {
    let mini = i;
    for (let j = i; j <= n - 1; j++) {
      if (nums[mini] > nums[j]) mini = j;
    }
    [nums[mini], nums[i]] = [nums[i], nums[mini]];
  }
  console.log(nums);
}

let arr = [19, 12, 22, 3, 7, 0, 17];
let n = arr.length;
SelectionSort(arr, n);
