var missingNumber = function (nums) {
  let xor1 = 0;
  let xor2 = 0;
  let n = nums.length;
  // console.log(n)
  for (let i = 0; i < n; i++) {
    xor1 = xor1 ^ nums[i];
    xor2 = xor2 ^ (i + 1);
  }
  return xor2 ^ xor1;
};

let arr = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const res = missingNumber(arr);
console.log(res);
