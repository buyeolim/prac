/*
점수계산
boj.kr/2506
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const nums = input[1].split(" ").map(Number);

let ans = nums[0] ? 1 : 0;
let acc = ans;
for (let i = 1; i < N; i++) {
  if (!nums[i]) {
    acc = 0;
    continue;
  }

  acc++;
  ans += acc;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
