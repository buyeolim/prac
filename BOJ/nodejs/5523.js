/*
경기 결과
boj.kr/5523
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const ans = [0, 0];
for (let n = 0; n < N; n++) {
  const [A, B] = input[1 + n].split(" ").map(Number);
  if (A === B) continue;

  A > B ? ans[0]++ : ans[1]++;
}

console.log(ans.join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
