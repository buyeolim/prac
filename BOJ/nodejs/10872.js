/*
팩토리얼
https://www.acmicpc.net/problem/10872
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

function fac(n) {
  if (n <= 1) {
    return 1;
  }

  n *= fac(n - 1);
  return n;
}

let N = 1 * input[0];

let ans = fac(N);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
