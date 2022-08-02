/*
막대기
boj.kr/17608
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = input[0] * 1;
const H = [];
for (let n = 0; n < N; n++) {
  let h = input[n + 1] * 1;
  H.push(h);
}

const stack = [];
for (let n = N - 1; n >= 0; n--) {
  let top = stack.length - 1;
  let h = H[n];
  if (top < 0 || stack[top] < h) {
    stack.push(h);
  }
}

console.log(stack.length);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
