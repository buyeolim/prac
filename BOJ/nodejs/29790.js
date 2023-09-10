/*
임스의 메이플컵
boj.kr/29790
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, U, L] = input[0].split(" ").map(Number);

let ans = "Bad";
if (N >= 1000) {
  ans = "Good";
  if (U >= 8000 || L >= 260) ans = "Very Good";
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
