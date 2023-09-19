/*
10!
boj.kr/28352
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

function f(n) {
  if (n <= 1) return 1;

  return n * f(n - 1);
}

let ans = f(N) / (7 * 24 * 60 * 60);
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
