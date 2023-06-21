/*
트로피 진열
boj.kr/1668
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const T = new Array(N).fill(0);
for (let n = 0; n < N; n++) {
  T[n] = 1 * input[1 + n];
}

const ans = [0, 0];
let prev = 0;
for (let i = 0; i < N; i++) {
  if (T[i] > prev) {
    ans[0]++;
    prev = T[i];
  }
}
prev = 0;
for (let i = N - 1; i >= 0; i--) {
  if (T[i] > prev) {
    ans[1]++;
    prev = T[i];
  }
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
