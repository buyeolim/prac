/*
노솔브 방지문제야!!
https://boj.kr/15917
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const Q = 1 * input[0];

const ans = new Array(Q).fill(0);
for (let q = 0; q < Q; q++) {
  const a = (1 * input[1 + q]).toString(2);
  if (a.match(/1/g).length === 1) ans[q] = 1;
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
