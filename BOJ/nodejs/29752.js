/*
최장 스트릭
boj.kr/29752
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const S = input[1].split(" ").map(Number);

let ans = 0;
let streak = 0;
for (let n = 0; n < N; n++) {
  if (S[n] === 0) {
    ans = Math.max(ans, streak);
    streak = 0;
    continue;
  }

  streak++;
}
ans = Math.max(ans, streak);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
