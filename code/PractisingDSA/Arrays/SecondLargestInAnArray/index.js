function SecondLargestInArray(nums, n) {
  let seclargest = -1;
  let largest = nums[0];
  for (let i = 0; i < n; i++) {
    if (nums[i] > largest) {
      seclargest = largest;
      largest = nums[i];
    } else if (nums[i] < largest && nums[i] > seclargest) {
      seclargest = nums[i];
    }
  }
  console.log(seclargest);
}

let arr = [12, 7, 31, 18, 25, 57];
let n = arr.length;
SecondLargestInArray(arr, n);
