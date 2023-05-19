/*
첨탑 밀어서 부수기
boj.kr/28014
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const H = input[1].split(" ").map(Number);

let ans = 1;
let prev = H[0];
for (let i = 1; i < N; i++) {
  prev <= H[i] && ans++;
  prev = H[i];
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
