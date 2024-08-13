// You are given two strings a and b. Your task is to find the number of indices where string a differs from string b. (Note: Strings are case insensitive i. e. Hello is same as hELLo).
// Input

// The input consists of two lines:

// The first line contains string a (1 <= |a| <= 10^4), representing the first string.

// The second line contains string b (|b| = |a|), representing the second string.

// Output

// Return an integer, the count of places where the two strings differ.

// Input:

// a = 'abcde'

// b = 'AbCdE'

// Output:

// 0

// Explanation:

// After converting both strings to lowercase for comparison, we find that they do not differ at any index. Therefore, the output is 0.

// Input:

// a = 'Hello'

// b = 'World'

// Output:

// 4

// Explanation:

// After converting both strings to lowercase for comparison, we find that they differ at every index except for 4th index . Therefore, the output is 4.

function CompareStrings(a, b, n) {
  let count = 0;
  let aLow = a.toLowerCase();
  let bLow = b.toLowerCase();
  for (let i = 0; i < n; i++) {
    if (aLow[i] !== bLow[i]) {
      count++;
    }
  }
  return count;
}
// let a = "abcde";
// let b = "AbCdE";
let a = "Hello";
let b = "World";
let n = a.length;
const res = CompareStrings(a, b, n);
console.log(res);
