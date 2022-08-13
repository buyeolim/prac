/*
나는 요리사다
boj.kr/2953
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = [0, 0]; // 번호, 점수
for (let i = 0; i < 5; i++) {
  let scores = input[i].split(" ").map(Number);
  let sum = scores.reduce((acc, cur) => acc + cur, 0);

  if (sum > ans[1]) {
    ans[0] = i + 1;
    ans[1] = sum;
  }
}

console.log(...ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
