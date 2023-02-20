/*
2023년은 검은 토끼의 해
boj.kr/27494
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

let ans = 0;
const win = ["2", "0", "2", "3"];
for (let num = 2023; num < N + 1; num++) {
  let idx = 0;
  for (let ch of num.toString()) {
    if (ch === win[idx]) idx++;
  }

  if (idx === 4) ans++;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
