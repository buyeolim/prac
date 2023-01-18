/*
노 땡스!
boj.kr/27159
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const nums = input[1].split(" ").map(Number);

let ans = nums[0];
for (let i = 1; i < N; i++) {
  if (nums[i - 1] !== nums[i] - 1) {
    ans += nums[i];
  }
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
