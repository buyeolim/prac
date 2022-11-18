/*
수 정렬하기
boj.kr/2750
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const nums = new Array();
for (let n = 0; n < N; n++) {
  nums.push(1 * input[1 + n]);
}

for (let i = 0; i < N - 1; i++) {
  for (let j = 0; j < N - i - 1; j++) {
    if (nums[j] > nums[j + 1]) {
      [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    }
  }
}

console.log(nums.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
