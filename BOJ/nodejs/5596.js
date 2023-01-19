/*
시험 점수
boj.kr/5596
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const S = input[0]
  .split(" ")
  .map(Number)
  .reduce((acc, cur) => acc + cur, 0);
const T = input[1]
  .split(" ")
  .map(Number)
  .reduce((acc, cur) => acc + cur, 0);

S >= T ? console.log(S) : console.log(T);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
