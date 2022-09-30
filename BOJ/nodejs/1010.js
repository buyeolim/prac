/*
다리 놓기
boj.kr/1010
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];
const dp = Array.from(Array(30), () => Array(30).fill(0));
let ans;

// combi
for (let i = 0; i < 30; i++) {
  dp[i][i] = dp[i][0] = 1;
}
for (let i = 2; i < 30; i++) {
  for (let j = 1; j < 30; j++) {
    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
  }
}

for (let t = 0; t < T; t++) {
  const [N, M] = input[1 + t].split(" ").map(Number);
  const check = Array(M).fill(0);

  ans = dp[M][N];
  console.log(ans);
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
