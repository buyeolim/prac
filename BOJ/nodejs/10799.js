/*
쇠막대기
boj.kr/10799
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const S = input[0];

const stack = new Array();
let ans = 0;
for (let i = 0; i < S.length; i++) {
  switch (S[i]) {
    case "(":
      stack.push(S[i]);
      break;
    case ")":
      stack.pop();
      if (S[i - 1] === "(") ans += stack.length;
      else ans++;
      break;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
