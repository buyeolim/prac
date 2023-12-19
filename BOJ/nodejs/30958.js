/*
서울사이버대학을 다니고
https://boj.kr/30958
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = +input[0];
const S = input[1].trim();

const C = new Array(26).fill(0);
for (let n = 0; n < N; n++) {
  if (S[n] === " " || S[n] === "," || S[n] === ".") continue;

  C[S[n].charCodeAt() - "a".charCodeAt()]++;
}
const ans = Math.max(...C);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
