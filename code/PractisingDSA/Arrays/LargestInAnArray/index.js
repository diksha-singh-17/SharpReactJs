function find_maximum(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  console.log(largest);
}

let arr = [12, 7, 31, 18, 25, 57];

find_maximum(arr);
