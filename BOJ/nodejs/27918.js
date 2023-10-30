/*
탁구 경기
https://boj.kr/27918
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = 1 * input[0];

const scores = [0, 0]; // [D, P]
for (let n = 0; n < N; n++) {
  const player = input[1 + n];
  player === "D" ? scores[0]++ : scores[1]++;
  if (Math.abs(scores[0] - scores[1]) > 1) break;
}
const ans = scores.join(":");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
