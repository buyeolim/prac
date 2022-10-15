/*
나누기
boj.kr/1075
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = input[0].trimEnd();
const F = 1 * input[1];

let ans;
let s = 1 * (N.slice(0, N.length - 2) + "00");
for (let num = s; num < s + 100; num++) {
  if (num % F === 0) {
    ans = num - s;
    break;
  }
}
console.log(ans.toString().padStart(2, "0"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
