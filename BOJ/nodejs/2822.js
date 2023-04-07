/*
점수 계산
boj.kr/2822
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const scores = Array.from({ length: 8 }, (v, i) => [null, i + 1]);
for (let lc = 0; lc < scores.length; lc++) {
  scores[lc][0] = 1 * input[lc];
}

scores.sort((a, b) => b[0] - a[0]);
const ans = [null, null];
ans[0] =
  scores[0][0] + scores[1][0] + scores[2][0] + scores[3][0] + scores[4][0];
ans[1] = [scores[0][1], scores[1][1], scores[2][1], scores[3][1], scores[4][1]]
  .sort((a, b) => a - b)
  .join(" ");

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
