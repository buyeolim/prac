/*
피보나치 수
boj.kr/2747
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

const fibo = (n) => {
  if (dp[n] > 0) return dp[n];
  else if (n < 1) return 0;

  return (dp[n] = fibo(n - 1) + fibo(n - 2));
};

const dp = Array.from({ length: N + 1 }, () => 0);
dp[1] = 1;
dp[2] = 1;
let ans = fibo(N);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
