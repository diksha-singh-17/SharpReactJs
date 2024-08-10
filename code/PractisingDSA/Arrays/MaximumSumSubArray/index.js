function maxSumSubArray(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      sum = 0;
      for (let k = i; k <= j; k++) {
        // console.log(arr[k]);
        sum = sum + arr[k];
      }
      if (maxSum < sum) maxSum = sum;
    }
  }
  console.log(maxSum);
}

let arr = [1, 2, 3, 4, 5, 23, -12];
let n = 7;
let sum = 0;
let maxSum = 0;
// maxSumSubArray(arr,n);
maxSumSubArray1(arr, n);

function maxSumSubArray1(arr, n) {
  let r = 0;
  let l = 0;
  let maxSum = 0;
  let sum = 0;
  while (r < n) {
    sum = sum + arr[r];
    if (sum > maxSum) {
      maxSum = Math.max(maxSum, sum);
    }
    r = r + 1;
  }
  document.write(maxSum);
  console.log(maxSum);
}

// 1

// 12

// 123

// 1234

// 12345

// 2

// 23

// 234

// 2345

// 3

// 34

// 345

// 4

// 45

// 5
