/*
피보나치 수 4
boj.kr/10826
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0];

dp = new Array(n + 1).fill(0n);
dp[1] = 1n;

function f(n) {
  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

let ans = f(n).toString();
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
