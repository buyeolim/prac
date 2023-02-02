/*
가장 긴 증가하는 부분 수열
boj.kr/11053
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const A = input[1].split(" ").map(Number);

let ans;
const dp = new Array(N).fill(0);
dp[0] = 1;
for (let i = 1; i < N; i++) {
  let max = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (A[j] < A[i]) {
      max = Math.max(dp[j], max);
    }
  }

  dp[i] = max + 1;
}

ans = Math.max(...dp);
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
