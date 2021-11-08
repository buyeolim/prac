/*
얼마?
https://www.acmicpc.net/problem/9325
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let l = 0;
const testcase = 1 * input[l++];
for (let t = 0; t < testcase; t++) {
  let s = 1 * input[l++]; // 자동차 가격
  const n = 1 * input[l++]; // 옵션 종류 개수
  for (let o = 0; o < n; o++) {
    const line = input[l++].split(" ");
    s += 1 * line[0] * line[1]; // 옵션 더하기
  }
  console.log(s);
}
