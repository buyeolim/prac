/*
1, 2, 3 더하기
https://boj.kr/9095
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const T = 1 * input[0];

const DP = new Array(12).fill(0);
for (let i = 1; i < 12; i++) {
  (i === 1 || i === 2 || i === 3) && (DP[i] += 1);
  DP[i - 1] && (DP[i] += DP[i - 1]);
  DP[i - 2] && (DP[i] += DP[i - 2]);
  DP[i - 3] && (DP[i] += DP[i - 3]);
}

const res = new Array(T);
for (let t = 0; t < T; t++) {
  const n = 1 * input[1 + t];
  res[t] = DP[n];
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
