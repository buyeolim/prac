/*
ISBN
boj.kr/6810
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b, c] = input.map(Number);

let sum =
  9 * 1 +
  7 * 3 +
  8 * 1 +
  0 * 3 +
  9 * 1 +
  2 * 3 +
  1 * 1 +
  4 * 3 +
  1 * 1 +
  8 * 3 +
  a * 1 +
  b * 3 +
  c * 1;
let ans = `The 1-3-sum is ${sum}`;

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
