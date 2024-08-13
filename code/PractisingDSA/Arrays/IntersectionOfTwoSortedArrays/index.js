function IntersectionOfTwoSortedArrays(nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  let i = 0;
  let j = 0;
  let ans = [];
  while (i < n1 && j < n2) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums2[j] < nums1[i]) {
      j++;
    } else {
      ans.push(nums1[i]);
      i++;
      j++;
    }
  }
  return ans;
}

let arr1 = [3, 5, 7, 8, 8, 9];
let arr2 = [5, 6, 7, 8];
const ans = IntersectionOfTwoSortedArrays(arr1, arr2);
console.log(ans);
