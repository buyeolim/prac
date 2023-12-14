/*
라면 공식
https://boj.kr/30007
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = input[0].split(" ").map(Number);
const W = new Array(N);
for (let n = 0; n < N; n++) {
  const [A, B, X] = input[1 + n].split(" ").map(Number);
  W[n] = A * (X - 1) + B;
}
const ans = W.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
