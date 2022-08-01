/*
피보나치 수 2
https://www.acmicpc.net/problem/2748
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = 1 * input[0];
const fibo = Array.from({ length: n + 1 }, () => -1);

if (n >= 1) {
  fibo[0] = 0n; // bigint
  fibo[1] = 1n;
}
for (let i = 2; i < n + 1; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo[n].toString());

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
