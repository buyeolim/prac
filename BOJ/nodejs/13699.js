/*
점화식
boj.kr/13699
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0];

const t = new Array(n + 1).fill(0n);
t[0] = t[1] = 1n;
for (let i = 2; i < n + 1; i++) {
  for (let j = 0; j < i; j++) {
    t[i] += t[j] * t[i - (j + 1)];
  }
}
const ans = t[n].toString();

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
