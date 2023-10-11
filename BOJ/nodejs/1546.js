/*
평균
boj.kr/1546
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const nums = input[1].split(" ").map(Number);

const M = Math.max(...nums);
const newNums = nums.map((num) => (num / M) * 100);
const ans = newNums.reduce((acc, cur) => acc + cur, 0) / N;

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
