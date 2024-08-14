var missingNumber = function (nums) {
  let XOR1 = 0;
  let XOR2 = 0;
  // console.log(nums.length)
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    XOR1 = XOR1 ^ nums[i];
    XOR2 = XOR2 ^ (i + 1);
  }
  //   console.log(XOR1,XOR2)
  // XOR2=XOR2^nums.length;
  // console.log(XOR1,XOR2)
  return XOR1 ^ XOR2;
};

let arr = [0, 1, 3];
console.log(missingNumber(arr));
