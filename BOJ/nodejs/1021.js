/*
회전하는 큐
https://www.acmicpc.net/problem/1021
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 1번 연산: 좌측 원소 제거
const firstOperation = () => {
  queue.shift();
};

// 2번 연산: 좌측 이동
const secondOperation = () => {
  const tmp = queue.shift();
  queue.push(tmp);
};

// 3번 연산: 우측 이동
const thirdOperation = () => {
  const tmp = queue.splice(queue.length - 1, 1);
  queue.unshift(tmp[0]);
};

let line = input[0].split(" ");
const N = line[0]; // 큐의 크기
const M = line[1]; //  1번 연산(뽑기) 횟수
const targets = input[1].split(" "); // 삭제해야할 인덱스

const queue = [];
for (let i = 1; i <= N; i++) {
  queue.push(i);
}

let cnt = 0;
let qIdx = 0;
for (let i = 0; i < M; i++) {
  target = parseInt(targets[i], 10); // 지워야할 위치(=원소)
  qIdx = queue.indexOf(target); // 원소의 현재 인덱스

  if (qIdx < queue.length / 2) {
    // 인덱스가 앞부분에 있으면 좌측 이동
    while (qIdx != 0) {
      secondOperation();
      qIdx--;
      cnt++;
    }
    firstOperation();
  } else {
    // 인덱스가 뒷부분에 있으면 우측 이동
    while (qIdx != queue.length) {
      thirdOperation();
      qIdx++;
      cnt++;
    }
    firstOperation();
  }
}

console.log(cnt);
