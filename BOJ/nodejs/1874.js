/*
스택 수열
boj.kr/1874
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0];
const S = [];
for (let i = 0; i < n; i++) {
  S.push(1 * input[1 + i]);
}

const stack = [];
const ans = [];
const res = [];
let top = -1;
let idx = 0;
for (let i = 1; i < n + 1; i++) {
  stack.push(i);
  ans.push("+");
  top++;

  while (stack[top] === S[idx] && stack.length > 0) {
    res.push(stack.pop());
    ans.push("-");
    top--;
    idx++;
  }
}

S.join("") === res.join("") ? console.log(ans.join("\n")) : console.log("NO");

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
