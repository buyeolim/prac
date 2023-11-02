/*
카드 뽑기
https://boj.kr/16204
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, M, K] = input[0].split(" ").map(Number);

const ans = Math.min(M, K) + Math.min(N - M, N - K);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
