/*
영화감독 숌
boj.kr/1436
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

let n = 0,
  i = 665;
while (n < N) {
  if (i.toString().includes("666")) {
    n++;
  }
  i++;
}

const ans = i - 1;
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
