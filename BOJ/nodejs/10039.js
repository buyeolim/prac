/*
평균 점수
boj.kr/10039
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const nums = input.map(Number);
let sum = 0;

for (let i = 0; i < 5; i++) {
  if (nums[i] > 40) {
    sum += nums[i];
  } else {
    sum += 40;
  }
}

console.log(sum / 5);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
