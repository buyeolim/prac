/*
좋은 구간
https://www.acmicpc.net/problem/1059
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const L = parseInt(input[0], 10); // 집합의 크기
const S = [0]; // L개의 원소를 가지는 집합(크기 1일 때 구간 고려)
input[1].split(" ").forEach((ele) => {
  S.push(parseInt(ele, 10));
});
const n = parseInt(input[2], 10); // 정수 n

// n이 포함된 범위 찾기
S.sort((a, b) => {
  return a - b;
});

let isExist = false; // 범위 존재 플래그
let a, b;
for (let i = 1; i < S.length; i++) {
  a = S[i - 1];
  b = S[i];
  if (n > a && n < b) {
    isExist = true;
    break;
  }
}

// 모든 구간 개수 구하기
let cnt = 0;
if (isExist === true) {
  for (let i = a + 1; i < b; i++) {
    for (let j = i + 1; j < b; j++) {
      // 구간에 n이 포함되는지 확인
      if (n >= i && n <= j) {
        cnt++;
      }
    }
  }
}

console.log(cnt);
