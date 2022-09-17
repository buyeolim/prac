/*
명령 프롬프트
boj.kr/1032
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const ans = input[1].trimEnd().split("");
for (let n = 1; n < N; n++) {
  let str = input[1 + n].trimEnd();
  for (let i = 0; i < str.length; i++) {
    str[i] !== ans[i] ? (ans[i] = "?") : null;
  }
}

console.log(ans.join(""));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
