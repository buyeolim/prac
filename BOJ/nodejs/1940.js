/*
주몽
boj.kr/1940
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const M = 1 * input[1];
const nums = input[2].split(" ").map(Number);

let ans = 0,
  cnt = 0,
  lt = 0;
for (let lt = 0; lt < N; lt++) {
  for (let rt = lt + 1; rt < N; rt++) {
    nums[rt] + nums[lt] === M ? ans++ : null;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
