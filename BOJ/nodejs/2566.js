/*
최댓값
boj.kr/2566
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = [-1, [-1, -1]];
for (let r = 0; r < 9; r++) {
  const row = input[r].split(" ").map(Number);
  for (let c = 0; c < 9; c++) {
    if (row[c] > ans[0]) {
      ans[0] = row[c];
      ans[1] = [r + 1, c + 1];
    }
  }
}

console.log(ans[0]);
console.log(ans[1].join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
