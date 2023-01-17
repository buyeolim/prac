/*
이진수 변환
boj.kr/10829
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
let ans = "";

function dfs(n) {
  if (n === 0) return;

  dfs(Math.floor(n / 2));
  ans += `${n % 2}`;
}

dfs(N);
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
