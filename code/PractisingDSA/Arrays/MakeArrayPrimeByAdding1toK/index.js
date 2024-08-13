// You are given an array and a target. you have to make the whole array prime by adding numbers from [1 to k]. If a number can't become prime set it to -1.

// Test Case 1:

// Input:

// 5

// 10 12 15 20 22

// 3

// Output:

// 11 13 17 23 23

// Explanation:

// The first element, 10, is not prime so we add 3 to it to get 13 which is a prime number. The second element, 12 we add 1, so it is marked as 13. The third element, 15, is not a prime number so we add 2 to it to get 17 which is a prime number and so on.

// Test Case 2:

// Input:

// 4

// 8 11 13 24

// 4

// Output:

// 11 13 17 -1

// Explanation:

// The first 3 elements can be made  prime by adding number from 1 to 4.

// the number 24 cannot be made prime by adding numbers from 0 to 4 as all number from 24 to 28 are non prime.

// Test Case 3:

// Input:

// 5

// 10 12 15 20 22

// 1

// Output:

// 11 13 -1 -1 23

// 15 and 20 cannot be made prime by adding 1 to it.

// All Tasks

// 3 / 6

// Your Answer

// No Answer Present

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 == 0 || num % 3 == 0) return false;

  for (let i = 5; i * i < num; i += 6) {
    if (num % i == 0 || num % (i + 2) == 0) return false;
  }
  return true;
}
function MakeArrayPrime(arr, n, k) {
  return arr.map((num) => {
    if (isPrime(num)) {
      return num;
    }

    for (let i = 1; i <= k; i++) {
      if (isPrime(num + i)) {
        return num + i;
      }
    }

    return -1;
  });
}

let arr = [10, 12, 15, 20, 22];
let k = 3;
let n = arr.length;
let Output = [11, 13, 17, 23, 23];

const res = MakeArrayPrime(arr, n, k);
console.log(res);

// The Logic Behind Incrementing by 6
// When checking if a number num is prime, you don't need to check divisibility by every integer. The key insight here is that all primes greater than 3 can be written in the form 6k ± 1 for some integer k.

// Here's why:
// Numbers Divisible by 2 and 3:

// Any integer can be expressed in one of the following forms:
// 6
// 𝑘
// 6k (divisible by 6)
// 6
// 𝑘
// +
// 1
// 6k+1
// 6
// 𝑘
// +
// 2
// 6k+2 (divisible by 2)
// 6
// 𝑘
// +
// 3
// 6k+3 (divisible by 3)
// 6
// 𝑘
// +
// 4
// 6k+4 (divisible by 2)
// 6
// 𝑘
// +
// 5
// 6k+5 (equivalent to
// 6
// 𝑘
// −
// 1
// 6k−1)
// Prime Numbers Beyond 3:

// The multiples of 2 and 3 are not prime (except 2 and 3 themselves).
// Thus, the possible candidates for primes greater than 3 are of the form
// 6
// 𝑘
// ±
// 1
// 6k±1. This is because any other form would be divisible by 2 or 3, and hence not prime.
// The Code
// javascript
// Copy code
// for (let i = 5; i * i <= num; i += 6) {
//   if (num % i === 0 || num % (i + 2) === 0) return false;
// }
// Explanation:
// Starting at 5: The loop starts at i = 5, which is the first number of the form
// 6
// 𝑘
// −
// 1
// 6k−1 for k = 1.
// Increment by 6: The loop increments by 6 because, after checking i, the next number you need to check is i + 2, which corresponds to
// 6
// 𝑘
// +
// 1
// 6k+1.
// Check divisibility:
// num % i === 0: Checks if num is divisible by
// 6
// 𝑘
// −
// 1
// 6k−1.
// num % (i + 2) === 0: Checks if num is divisible by
// 6
// 𝑘
// +
// 1
// 6k+1.
// This way, you only check numbers of the form
// 6
// 𝑘
// −
// 1
// 6k−1 and
// 6
// 𝑘
// +
// 1
// 6k+1, which are the potential prime candidates, making the algorithm more efficient.

// Example:
// Consider num = 31:
// The square root of 31 is approximately 5.57, so you need to check divisibility by numbers up to 5.
// Start with i = 5:
// Check 31 % 5 (which is not 0).
// Check 31 % 7 (which is not 0).
// Since no divisors were found 31 is prime.
