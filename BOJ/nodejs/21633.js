/*
Bank Transfer
https://boj.kr/21633
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const k = 1 * input[0];

let commission = k * 0.01 + 25;
if (k * 0.01 + 25 < 100) {
  commission = 100;
} else if (k * 0.01 + 25 > 2000) {
  commission = 2000;
}
const ans = commission.toFixed(2);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
