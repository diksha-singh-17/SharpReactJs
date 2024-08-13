function MoveZeroesToEnd(nums, n) {
  // step:1 Find out the first index of zero
  let i = -1;
  for (let j = 0; j < n; j++) {
    if (nums[j] == 0) {
      i = j;
      break;
    }
  }
  if (i == -1) return nums; //no-zeroes present

  for (let j = i + 1; j < n; j++) {
    // step:2 swap the element at index i with the element at index j
    if (nums[j] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  return nums;
}

let arr = [0, 1, 0, 3, 12];
let n = arr.length;
const res = MoveZeroesToEnd(arr, n);
console.log(res);
