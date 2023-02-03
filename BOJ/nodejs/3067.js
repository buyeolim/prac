/*
Coins
boj.kr/3067
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ln = 0; // line number
const T = 1 * input[ln++];
for (let t = 0; t < T; t++) {
  const N = 1 * input[ln++];
  const coins = input[ln++].split(" ").map(Number);
  const M = 1 * input[ln++];

  let ans;
  const dp = new Array(M + 1).fill(0); // 금액 M 일 때, 경우의 수
  dp[0] = 1; // 금액 0 일 때, 경우의수 1 (공집합)
  for (let n = 0; n < N; n++) {
    let coin = coins[n]; // 동전의 가치
    for (let m = coin; m < M + 1; m++) {
      let price = m; // 금액 m
      dp[price] += dp[price - coin];
    }
  }

  ans = dp[M];
  console.log(ans);
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
