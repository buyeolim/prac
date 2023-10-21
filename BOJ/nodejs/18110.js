/*
solved.ac
https://boj.kr/18110
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const n = 1 * input[0];
const scores = new Array(n).fill(0);
for (let i = 0; i < n; i++) {
  scores[i] = 1 * input[1 + i];
}

scores.sort((a, b) => a - b);
const cnt = Math.round(n * 0.15);
const slicedScores = scores.slice(cnt, n - cnt);
const ans = !n
  ? 0
  : Math.round(
      slicedScores.reduce((acc, cur) => acc + cur, 0) / slicedScores.length
    );

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
