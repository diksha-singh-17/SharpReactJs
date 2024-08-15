// let iterativeFunction = function (arr, x) {
//   let start = 0,
//     end = arr.length - 1;

//   // Iterate while start not meets end
//   while (start <= end) {
//     // Find the mid index
//     let mid = Math.floor((start + end) / 2);

//     // If element is present at
//     // mid, return True
//     if (arr[mid] === x) return true;
//     // Else look in left or
//     // right half accordingly
//     else if (arr[mid] < x) start = mid + 1;
//     else end = mid - 1;
//   }

//   return false;
// };

// // Driver code
// let arr = [1, 3, 5, 7, 8, 9];
// let x = 5;

// if (iterativeFunction(arr, x, 0, arr.length - 1)) {
//   console.log("Element found!");
// } else {
//   console.log("Element not found!");
// }

// x = 8;

// if (iterativeFunction(arr, x, 0, arr.length - 1)) {
//   console.log("Element found!");
// } else {
//   console.log("Element not found!");
// }

var search = function (nums, x) {
  let start = 0;
  let end = nums.length - 1;
  let x = target;
  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at
    // mid, return True
    if (nums[mid] === x) console.log(mid);
    // Else look in left or
    // right half accordingly
    else if (nums[mid] < x) start = mid + 1;
    else end = mid - 1;
  }

  console.log(-1);
};
let arr = [2, 4, 6, 8, 10];
let target = 4;
search(arr, target);
// console.log("pppp", res);
