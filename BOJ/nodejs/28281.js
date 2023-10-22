/*
선물
https://boj.kr/28281
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

let ans = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < N - 1; i++) {
  ans = Math.min(ans, (A[i] + A[i + 1]) * X);
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
