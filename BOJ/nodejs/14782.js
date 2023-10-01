/*
Bedtime Reading, I
boj.kr/14782
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const I = 1 * input[0];
let ans = 0;
for (let i = 1; i <= Math.sqrt(I); i++) {
  if (I % i !== 0) continue;

  ans += i === I / i ? i : i + I / i;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
