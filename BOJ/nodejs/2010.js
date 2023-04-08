/*
플러그
boj.kr/2010
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = 1;
const N = 1 * input[0];
for (let n = 0; n < N; n++) {
  ans = ans - 1 + 1 * input[1 + n];
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
