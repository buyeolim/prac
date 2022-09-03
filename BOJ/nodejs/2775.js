/*
부녀회장이 될테야
boj.kr/2775
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const A = Array.from(Array(15), (v, r) =>
  Array.from({ length: 15 }, (v, c) => c)
);
for (let k = 1; k < 15; k++) {
  for (let n = 1; n < 15; n++) {
    A[k][n] = A[k][n - 1] + A[k - 1][n];
  }
}

let line = 0;
const T = 1 * input[line++];
let ans = [];
for (let t = 0; t < T; t++) {
  const k = 1 * input[line++];
  const n = 1 * input[line++];
  ans.push(A[k][n]);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
