/*
LCM
boj.kr/5347
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0];
const ans = [];
for (let i = 0; i < n; i++) {
  const [a, b] = input[1 + i].split(" ").map(Number);

  const GCD = euclidean(a, b);
  const LCM = (a * b) / GCD;
  ans.push(LCM);
}

function euclidean(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
