/*
좋은 단어
https://www.acmicpc.net/problem/3986
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input.shift(), 10); // 단어의 수
const stack = [];
let cnt = 0;
for (let i = 0; i < N; i++) {
  const line = input[i];

  for (let j = 0; j < line.length; j++) {
    const top = stack[stack.length - 1];
    const ch = line[j];

    if (top === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  if (stack.length === 0) {
    cnt++;
  }
  stack.length = 0; // 스택 초기화
}

console.log(cnt);
