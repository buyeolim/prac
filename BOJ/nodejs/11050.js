/*
이항 계수 1
https://boj.kr/11050
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

function factorial(n) {
  let res = 1;
  for (let i = 1; i < n + 1; i++) res *= i;

  return res;
}

const ans = factorial(N) / (factorial(K) * factorial(N - K));

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
