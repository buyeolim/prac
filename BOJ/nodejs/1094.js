/*
막대기
boj.kr/1094
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let X = 1 * input[0];

let S = 64;
let ans = 0;
while (X != 0) {
  if (S > X) {
    S /= 2;
  } else {
    X -= S;
    ans++;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
