/*
줄번호
boj.kr/4470
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
for (let n = 0; n < N; n++) {
  console.log(`${n + 1}. ${input[n + 1].trimEnd()}`);
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
