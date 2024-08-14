function NumberAppeadedOnce(nums) {
  let XOR1 = 0;
  for (let i = 0; i < nums.length; i++) {
    XOR1 ^= nums[i];
  }
  return XOR1;
}

nums = [4, 1, 2, 1, 2];

// Output-4
const res = NumberAppeadedOnce(nums);
console.log(res);
