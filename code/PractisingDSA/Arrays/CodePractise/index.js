function MaxOccChar(s, n) {
  let arr = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    let ch = s[i];
    let number = ch.charCodeAt(0) - "a".charCodeAt(0);
    arr[number]++;
  }
  console.log(arr);
  let max = -1,
    ans = -1;
  for (let i = 0; i < 26; i++) {
    if (arr[i] > max) {
      max = arr[i];
      ans = i;
    }
  }
  console.log(String.fromCharCode(ans + "a".charCodeAt(0)));
}

let s = "testsample";
let n = s.length;
// output=e
MaxOccChar(s, n);
