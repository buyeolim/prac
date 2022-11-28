/*
N번째 큰 수
boj.kr/2693
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];

const ans = [];
for (let t = 0; t < T; t++) {
  const A = input[1 + t].split(" ").map(Number);
  A.sort((a, b) => b - a);
  ans.push(A[2]);
}
console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
