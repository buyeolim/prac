/*
부재중 전화
https://www.acmicpc.net/problem/1333
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const nums = input[0].split(" ");
const N = 1 * nums[0]; // 노래의 개수
const L = 1 * nums[1]; // 각 노래의 재생시간
const D = 1 * nums[2]; // 전화벨 간격

let playTime = L * N + 5 * (N - 1); // 전체 재생시간
let pending = -1;
let sec = 0;
let pendingTime = L; // 대기시작 시간
while (true) {
  if (sec <= playTime) {
    if (pending < 0 && sec == pendingTime) {
      pending = 0; // 대기시간 진입
      pendingTime += 5 + L; // 다음 대기시작 설정
    }
    if (pending == 5) {
      pending = -1; // 대기시간 해제
    }
  }

  // 전화벨
  if (sec % D == 0) {
    if (pending >= 0) {
      break;
    }
  }

  // 시간 진행
  if (pending >= 0) {
    pending++;
  }
  sec++;
}

console.log(sec);
