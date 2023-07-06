/*
알고리즘 수업 - 알고리즘의 수행 시간 3
boj.kr/24264
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0];

function menOfPassion(A, n) {
  sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum = sum + A[i] * A[j]; // 코드1
    }
  }
  return sum;
}

const ans = [n ** 2, 2];
console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
