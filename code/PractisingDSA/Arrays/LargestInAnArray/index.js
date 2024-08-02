function find_maximum(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}

let arr = [12, 7, 31, 18, 25];

console.log(find_maximum(arr));
