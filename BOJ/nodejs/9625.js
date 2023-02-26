/*
BABBA
boj.kr/9625
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const K = 1 * input[0];

const A = new Array(K + 1).fill(0);
const B = new Array(K + 1).fill(0);

let ans;
A[0] = 1;
for (let i = 1; i < K + 1; i++) {
  A[i] = B[i - 1];
  B[i] = A[i - 1] + B[i - 1];
}
ans = `${A[K]} ${B[K]}`;

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
