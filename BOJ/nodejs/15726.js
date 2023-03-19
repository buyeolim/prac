/*
이칙연산
boj.kr/15726
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const nums = input[0].split(" ").map(Number);

let ans = 0;
ans = Math.max(ans, (nums[0] * nums[1]) / nums[2]);
ans = Math.max(ans, (nums[0] / nums[1]) * nums[2]);

console.log(Math.floor(ans));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
