/*
방어율 무시 계산하기
boj.kr/25756
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const A = input[1].split(" ").map(Number);

const ans = new Array(N).fill(0);
let val = 1;
for (let i = 0; i < N; i++) {
  val *= (100 - A[i]) / 100;
  ans[i] = Number(((1 - val) * 100).toFixed(6));
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
