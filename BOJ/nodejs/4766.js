/*
일반 화학 실험
boj.kr/4766
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let lc = 0;
let prev = 1 * input[lc++];
const ans = [];
while (true) {
  const C = 1 * input[lc++];
  if (C === 999) break;

  const diff = (C - prev).toFixed(2);
  ans.push(diff);
  prev = C;
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
