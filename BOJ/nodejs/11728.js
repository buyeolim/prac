/*
배열 합치기
boj.kr/11728
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

let n = 0,
  m = 0;
let ans = "";
while (n < N && m < M) {
  if (A[n] <= B[m]) {
    ans += `${A[n++]} `;
  } else {
    ans += `${B[m++]} `;
  }
}
while (n < N) ans += `${A[n++]} `;
while (m < M) ans += `${B[m++]} `;

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
