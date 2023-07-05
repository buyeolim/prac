/*
알고리즘 수업 - 알고리즘의 수행 시간 1
boj.kr/24262
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0];

function menOfPassion(A, n) {
  const i = Math.floor(n / 2);
  return A[i]; // 코드1
}

const ans = "1\n0";
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
