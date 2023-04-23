/*
콘테스트
boj.kr/5576
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const W = new Array(10).fill(0);
const K = new Array(10).fill(0);
const ans = [0, 0];
for (let i = 0; i < 20; i++) {
  let score = 1 * input[i];
  i < 10 ? (W[i] = score) : (K[i] = score);
}

W.sort((a, b) => b - a);
K.sort((a, b) => b - a);
ans[0] = W[0] + W[1] + W[2];
ans[1] = K[0] + K[1] + K[2];

console.log(ans.join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
