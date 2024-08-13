function UnionOfSortedArrays(nums1, nums2, n1, n2) {
  let ans = [];
  let i = 0;
  let j = 0;
  // i=2345
  // j=12345
  // ans=[1,2,3,4,5,6,7,9,10]
  //   let arr1 = [1, 2, 3, 4, 5, 10];
  // let arr2 = [1, 2, 3, 6, 7, 9];

  while (i < n1 && j < n2) {
    if (nums1[i] <= nums2[j]) {
      if (ans.length == 0 || ans[ans.length - 1] !== nums1[i]) {
        ans.push(nums1[i]);
      }
      i++;
    } else {
      if (ans.length == 0 || ans[ans.length - 1] !== nums2[j]) {
        ans.push(nums2[j]);
      }
      j++;
    }
  }
  while (i < n1) {
    //iterate if elemts left in first array
    if (ans[ans.length - 1] !== nums1[i]) {
      ans.push(nums1[i]);
    }
    i++;
  }

  while (j < n2) {
    //iterate if elemts left in second array
    if (ans[ans.length - 1] !== nums2[j]) {
      ans.push(nums2[j]);
    }
    j++;
  }
  return ans;
}

let arr1 = [1, 2, 3, 4, 5, 10];
let arr2 = [1, 2, 3, 6, 7, 9];
let n1 = arr1.length;
let n2 = arr2.length;
console.log(n1, n2);

const res = UnionOfSortedArrays(arr1, arr2, n1, n2);
console.log(res);
