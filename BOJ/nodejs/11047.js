/*
동전 0
https://boj.kr/11047
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input.slice(1).map(Number);

let ans = 0;
let r = K;
for (let i = N - 1; i >= 0; i--) {
  if (r === 0) break;
  if (A[i] > r) continue;

  ans += Math.floor(r / A[i]);
  r %= A[i];
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
