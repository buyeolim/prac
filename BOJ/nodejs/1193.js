/*
분수찾기
https://www.acmicpc.net/problem/1193
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const x = 1 * input[0];

let d = 1,
  r = 0,
  c = 0,
  n = 0; // 대각선, 행, 열, 번호
let flag = false; // 방향 플래그(순방향 true)
while (true) {
  if (n + d >= x) {
    if (flag == true) {
      r = 0;
      c = d + 1;
      for (let i = 0; i < x - n; i++) {
        r += 1;
        c -= 1;
      }
    } else {
      r = d + 1;
      c = 0;
      for (let i = 0; i < x - n; i++) {
        r -= 1;
        c += 1;
      }
    }
    break;
  }

  n += d; // 다음 변환점
  d += 1; // 대각선 길이 증가
  flag = !flag; // 방향전환
}

console.log(`${r}/${c}`);
