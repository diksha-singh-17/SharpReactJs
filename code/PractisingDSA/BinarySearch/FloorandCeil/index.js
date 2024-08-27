function floor(arr, k) {
  let ans = -1;
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= k) {
      ans = arr[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

function ceil(arr, k) {
  let ans = -1;
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= k) {
      ans = arr[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function FloorAndceil(arr, k) {
  let flo = floor(arr, k);
  let cei = ceil(arr, k);

  return { flo, cei };
}

let arr = [3, 4, 4, 7, 8, 10],
  k = 2;
const res = FloorAndceil(arr, k);
console.log(res);
