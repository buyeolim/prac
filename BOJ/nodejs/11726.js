/*
2×n 타일링
https://boj.kr/11726
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const n = 1 * input[0];

const DP = new Array(1001).fill(0);
DP[1] = 1;
DP[2] = 2;
for (let i = 3; i < 1001; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2]) % 10007;
}
const ans = DP[n];

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
