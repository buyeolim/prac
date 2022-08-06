/*
주사위 세개
boj.kr/2480
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b, c] = input[0].split(" ").map((ele) => 1 * ele);
let ans = 0;
if (a === b && b === c) {
  ans = 10000 + a * 1000;
} else if (a === b) {
  ans = 1000 + a * 100;
} else if (b === c) {
  ans = 1000 + b * 100;
} else if (a === c) {
  ans = 1000 + c * 100;
} else {
  ans = Math.max(a, b, c) * 100;
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
