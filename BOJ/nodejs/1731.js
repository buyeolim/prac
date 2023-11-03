/*
추론
https://boj.kr/1731
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = 1 * input[0];
const S = input.slice(1).map(Number);

const isDiff = S[N - 1] - S[N - 2] === S[1] - S[0] ? true : false;
const ans = isDiff ? S[N - 1] + (S[1] - S[0]) : S[N - 1] * (S[1] / S[0]);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
