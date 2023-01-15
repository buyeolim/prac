/*
지능형 기차
boj.kr/2455
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = 0;
let cur = 0;
for (let i = 0; i < 4; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  cur = cur - a + b;
  if (cur > ans) ans = cur;
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
