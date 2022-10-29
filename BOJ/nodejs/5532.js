/*
방학 숙제
boj.kr/5532
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [L, A, B, C, D] = input.map(Number);

console.log(
  L -
    Math.max(
      A % C === 0 ? A / C : Math.floor(A / C) + 1,
      B % D === 0 ? B / D : Math.floor(B / D) + 1
    )
);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
