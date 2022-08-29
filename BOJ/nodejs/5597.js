/*
과제 안 내신 분..?
boj.kr/5597
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const nums = Array.from({ length: 31 }, (v, i) => i);
input.forEach((e) => (nums[parseInt(e)] = 0));
console.log(nums.filter((e, i) => e !== 0).join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
