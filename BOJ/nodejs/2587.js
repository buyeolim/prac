/*
대표값2
boj.kr/2587
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let nums = new Array(5);
for (let i = 0; i < 5; i++) {
  nums[i] = 1 * input[i];
}

let ans = [
  nums.reduce((acc, cur) => acc + cur, 0) / 5,
  nums.sort((a, b) => a - b)[2],
];
console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
