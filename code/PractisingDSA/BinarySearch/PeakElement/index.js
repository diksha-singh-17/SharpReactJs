function PeakElement(arr, n) {
  // let n = arr.length;
  if (n == 1) return 0;
  if (arr[0] > arr[1]) return 0;
  if (arr[n - 1] > arr[n - 2]) return n - 1;

  let low = 1;
  let high = n - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // console.log(mid);

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid;
    }
    if (arr[mid] > arr[mid + 1]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

let arr = [1, 8, 1, 5, 3];
let n = arr.length;
// output=3 //1 <= 5 >= 3
// console.log(n);
let res = PeakElement(arr, n);
console.log(res);
