/*
꼬마 정민
boj.kr/11382
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

console.log(
  input[0]
    .split(" ")
    .map(Number)
    .reduce((acc, val) => acc + val, 0)
);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
