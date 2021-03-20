/*
균형잡힌 세상
https://www.acmicpc.net/problem/4949
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const stack = [];
for (let i = 0; i < input.length; i++) {
  const line = input[i];
  let balanced = true; // 문장 균형 플래그

  // 종료 조건
  if (line.length === 1 && line[0] === ".") {
    break;
  }

  for (let l = 0; l < line.length; l++) {
    const ch = line[l];
    const top = stack[stack.length - 1];

    if (ch === "(" || ch === "[") {
      stack.push(ch);
    } else if (ch === ")") {
      if (top === "(") {
        stack.pop();
      } else {
        balanced = false;
        break;
      }
    } else if (ch === "]") {
      if (top === "[") {
        stack.pop();
      } else {
        balanced = false;
        break;
      }
    } else {
      continue;
    }
  }

  // 잔여 스택 확인
  if (stack.length !== 0) {
    balanced = false;
  }

  balanced === true ? console.log("yes") : console.log("no");

  stack.length = 0;
}
