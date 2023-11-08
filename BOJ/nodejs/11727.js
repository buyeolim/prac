/*
2×n 타일링 2
https://boj.kr/11727
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const n = 1 * input[0];

const DP = new Array(n + 1).fill(0n);
DP[1] = 1n;
DP[2] = 3n;
for (let i = 3; i < n + 1; i++) {
  DP[i] = DP[i - 1] + 2n * DP[i - 2];
}
const ans = (DP[n] % 10007n).toString();

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
