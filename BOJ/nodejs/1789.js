/*
수들의 합
boj.kr/1789
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const S = 1 * input[0];

let n = 2;
let sum = n;
while (true) {
  if (S > sum - n && S <= sum) break;
  n++;
  sum += n;
}
let ans = n - 1;

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
