/*
검증수
boj.kr/2475
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B, C, D, E] = input[0].split(" ").map(Number);

const func = (a, b, c, d, e) => {
  return (a ** 2 + b ** 2 + c ** 2 + d ** 2 + e ** 2) % 10;
};

console.log(func(A, B, C, D, E));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
