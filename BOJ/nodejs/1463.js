/*
1로 만들기
https://boj.kr/1463
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = 1 * input[0];

const DP = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
DP[N] = 0;
for (let n = N; n > 0; n--) {
  const X = n;
  // const counts = [DP[n], DP[n], DP[n]]; // [연산1, 연산2, 연산3]
  if (X % 3 === 0) DP[X / 3] = Math.min(DP[X / 3], DP[n] + 1);
  if (X % 2 === 0) DP[X / 2] = Math.min(DP[X / 2], DP[n] + 1);
  if (n - 1 > 0) DP[n - 1] = Math.min(DP[n - 1], DP[n] + 1);
}
const ans = DP[1];

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
