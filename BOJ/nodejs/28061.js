/*
레몬 따기
boj.kr/28061
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const lemons = input[1].split(" ").map(Number);

let ans = 0;
for (let i = 0; i < N; i++) {
  lemons[i] -= N - i;
  ans = Math.max(lemons[i], ans);
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
