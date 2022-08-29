/*
대소문자 바꾸기
boj.kr/2744
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

console.log(
  input[0]
    .split("")
    .map((e) => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
    .join("")
);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
