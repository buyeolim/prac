/*
A를 B로
https://www.acmicpc.net/problem/13019
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const A = input[0].replace(/\r/g, ""),
  B = input[1].replace(/\r/g, "");

// A, B 문자열 구성 확인
const mapA = new Map();
const mapB = new Map();
for (let i = 0; i < A.length; i++) {
  // A 구성 파악
  if (mapA.has(A[i])) {
    mapA.set(A[i], mapA.get(A[i]) + 1);
  } else {
    mapA.set(A[i], 1);
  }

  // B 구성 파악
  if (mapB.has(B[i])) {
    mapB.set(B[i], mapB.get(B[i]) + 1);
  } else {
    mapB.set(B[i], 1);
  }
}

// 횟수 계산
let ans = -1;
const objA = Object.fromEntries([...mapA.entries()].sort());
const objB = Object.fromEntries([...mapB.entries()].sort());
if (Object.entries(objA).toString() == Object.entries(objB).toString()) {
  let a_idx = A.length,
    b_idx = B.length;
  ans = 0;
  while (a_idx >= 0 && b_idx >= 0) {
    if (A[a_idx] == B[b_idx]) {
      b_idx--;
    } else {
      ans++;
    }
    a_idx--;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
