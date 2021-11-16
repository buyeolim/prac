/*
수 이어 쓰기 1 
https://www.acmicpc.net/problem/1748
 */
const start = new Date().getTime();
const { strictEqual } = require("assert");
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

const len = input[0].length;
let point = 1;
for (let i = 0; i < len - 1; i++) {
  point *= 10;
}

let tmp = N;
let ans = 0;
while (point > 0) {
  ans += (tmp - point + 1) * String(point).length;
  tmp = point - 1;
  point = Math.floor(point / 10);
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
