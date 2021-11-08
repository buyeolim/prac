/*
최댓값
https://www.acmicpc.net/problem/2562
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let max = Number.NEGATIVE_INFINITY;
let idx = 0;
for (let i = 0; i < input.length; i++) {
  if (1 * input[i] > max) {
    max = 1 * input[i];
    idx = i + 1;
  }
}

console.log(max + "\n" + idx);
