/*
소트인사이드
https://www.acmicpc.net/problem/1427
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = input[0];

let nums = N.split("").map((ele) => 1 * ele);
nums.sort((a, b) => b - a);

let ans = "";
nums.forEach((num) => {
  ans += String(num);
});
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
