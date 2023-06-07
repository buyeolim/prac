/*
세 막대
boj.kr/14215
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b, c] = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

if (a === b && a === c) {
  ans = a + b + c;
} else {
  let r = c < a + b - 1 ? c : a + b - 1;
  ans = a + b + r;
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
