/*
연속합
boj.kr/1912
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0];
const nums = input[1].split(" ").map(Number);
let ans = Number.MIN_SAFE_INTEGER;

// Dynamic Programming - Kadane's algorithm
const MAX_N = 100_000;
const DP = Array.from({ length: MAX_N });
for (let i = 0; i < n; i++) {
  if (i === 0) {
    DP[i] = nums[i];
  } else {
    DP[i] = Math.max(nums[i], DP[i - 1] + nums[i]);
  }

  ans = Math.max(ans, DP[i]);
}

// Brute-Force -> 시간 초과
// let sum;
// for (let s = 0; s < n; s++) {
//   for (let e = s + 1; e < n; e++) {
//     sum = 0;
//     for (let i = s; i <= e; i++) {
//       sum += nums[i];
//     }

//     ans = Math.max(ans, sum);
//   }
// }

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
