/*
소음
https://boj.kr/2935
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const A = BigInt(input[0]);
const op = input[1];
const B = BigInt(input[2]);

const ans = op === "+" ? (A + B).toString() : (A * B).toString();

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
