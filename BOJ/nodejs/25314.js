/*
코딩은 체육과목 입니다
boj.kr/25314
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
let ans = "";
for (let i = 0; i < N / 4; i++) {
  ans += "long ";
}
ans += "int";
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
