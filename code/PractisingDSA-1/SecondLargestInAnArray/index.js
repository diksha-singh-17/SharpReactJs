function SecondLargestInAnArray(arr) {
  let lar = arr[0];
  let secLar = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > lar) {
      secLar = lar;
      lar = arr[i];
    } else if (arr[i] > secLar && arr[i] < lar) {
      secLar = arr[i];
    }
  }
  console.log(lar, secLar);
}

let arr = [1, 8, 7, 56, 90];
SecondLargestInAnArray(arr);
