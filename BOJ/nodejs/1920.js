/*
수 찾기
boj.kr/1920
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const A = input[1].split(" ").map(Number);
const M = 1 * input[2];
const nums = input[3].split(" ").map(Number);

A.sort((a, b) => a - b);
let ans = Array.from({ length: M }, () => 0);
for (let i = 0; i < M; i++) {
  let left = 0,
    right = N - 1;
  let mid;

  if (nums[i] < A[left] || nums[i] > A[right]) continue;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (A[mid] === nums[i]) {
      ans[i] = 1;
      break;
    }

    A[mid] < nums[i] ? (left = mid + 1) : (right = mid - 1);
  }
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
