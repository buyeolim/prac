/*
Ice Cream
boj.kr/24087
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [S, A, B] = input.map(Number);

let ans = 250;
if (S - A > 0) {
  ans += Math.ceil((S - A) / B) * 100;
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
