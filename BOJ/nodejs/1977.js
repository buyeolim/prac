/*
완전제곱수
boj.kr/1977
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const M = input[0].split(" ").map(Number);
const N = input[1].split(" ").map(Number);
let ans = [0, Number.MAX_SAFE_INTEGER]; // 합, 최솟값
for (let i = parseInt(Math.sqrt(M)); i <= Math.sqrt(N); i++) {
  if (i ** 2 < M) continue;

  ans[0] += i ** 2;
  ans[1] = Math.min(ans[1], i ** 2);
}

console.log(ans[0] === 0 ? -1 : ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
