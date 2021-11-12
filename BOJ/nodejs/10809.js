/*
알파벳 찾기
https://www.acmicpc.net/problem/10809
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

S = input[0];

A = Array.from({ length: 26 }, () => -1);
for (let i = 0; i < S.length; i++) {
  ch = S[i];
  code = ch.charCodeAt() - 97;
  if (A[code] === -1) {
    A[code] = i;
  }
}

console.log(...A);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
