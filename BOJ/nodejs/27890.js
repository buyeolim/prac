/*
특별한 작은 분수
boj.kr/27890
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [x0, N] = input[0].split(" ").map(Number);

let curr = x0;
for (let n = 0; n < N; n++) {
  let next = curr % 2 === 0 ? Math.floor(curr / 2) ^ 6 : (2 * curr) ^ 6;

  curr = next;
}

console.log(curr);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
