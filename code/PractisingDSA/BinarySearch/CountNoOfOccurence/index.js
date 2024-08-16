function FirstOcc(nums, target, n) {
  let left = 0;
  let right = n - 1;
  let first = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      first = mid;
      right = mid - 1;
    }
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return first;
}

function SecOcc(nums, target, n) {
  let left = 0;
  let right = n - 1;
  let last = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      last = mid;
      left = mid + 1;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return last;
}
function FirstAndLastOcc(nums, target) {
  let n = nums.length;
  let firstOcc = FirstOcc(nums, target, n);
  // console.log(firstOcc);

  if (firstOcc == -1) {
    return [-1, -1];
  }
  let secOcc = SecOcc(nums, target, n);
  let result = secOcc - firstOcc + 1;
  return { result };
}

let arr = [1, 2, 3, 3, 5, 6, 8, 8, 8, 8, 9];

let target = 8;

// Output : 4
const res = FirstAndLastOcc(arr, target);
console.log(res);
