/*
Gauß
boj.kr/7523
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];

const ans = new Array(T);
for (let t = 0; t < T; t++) {
  const [n, m] = input[1 + t].split(" ").map(BigInt);
  const N = ((n - 1n) * n) / 2n;
  const M = (m * (m + 1n)) / 2n;
  ans[t] = `Scenario #${t + 1}:\n${M - N}\n`;
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
