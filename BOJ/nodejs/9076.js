/*
점수 집계
https://boj.kr/9076
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const T = +input[0];
const res = new Array(T);
for (let t = 0; t < T; t++) {
  const N = input[1 + t].split(" ").map(Number);
  N.sort((a, b) => a - b);
  N[0] = N[4] = 0;
  const sum = N.reduce((acc, cur) => acc + cur);
  res[t] = N[3] - N[1] >= 4 ? "KIN" : sum;
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
