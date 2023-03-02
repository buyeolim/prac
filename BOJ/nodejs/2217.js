/*
로프
boj.kr/2217
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const W = new Array(N).fill(0);
for (let i = 0; i < N; i++) W[i] = 1 * input[1 + i];

let ans = 0;
W.sort((a, b) => a - b);
for (let i = 0; i < N; i++) {
  let sum = W[i] * (N - i);
  ans = Math.max(sum, ans);
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
