/*
공백 없는 A+B
boj.kr/15873
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const nums = input[0].split("").map(Number);

let A, B;
for (let i = 0; i < nums.length; i++) {
  if (i === 0) A = nums[i];
  if (i === 1 && nums[i] === 0) {
    A = 10;
    continue;
  } else {
    B = nums[i];
  }
  if (nums[i] === 0) B = 10;
}

console.log(A + B);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
