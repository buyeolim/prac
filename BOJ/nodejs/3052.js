/*
나머지
https://www.acmicpc.net/problem/3052
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let mod = Array.from({ length: 42 }, () => 0);
for (let i = 0; i < 10; i++) {
  let idx = (1 * input[i]) % 42;
  mod[idx]++;
}

let ans = 0;
for (let i = 0; i < 42; i++) {
  if (mod[i] !== 0) ans++;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
