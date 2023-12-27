/*
히스토그램
https://boj.kr/13752
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const n = +input[0];
const res = new Array(n);
for (let i = 0; i < n; i++) {
  const k = +input[1 + i];
  res[i] = "=".repeat(k);
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
