/*
FA
boj.kr/14935
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let x = 1 * input[0];

function f(x) {
  return Math.floor(x / 10 ** (x.toString().length - 1)) * x.toString().length;
}

let ans = false;
let cnt = 0;
let prev;
while (cnt < Number.MAX_SAFE_INTEGER) {
  prev = x;
  x = f(x);

  if (prev === x) {
    ans = true;
    break;
  }
  cnt++;
}

console.log(ans ? "FA" : "NFA");

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
