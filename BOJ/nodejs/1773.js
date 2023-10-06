/*
폭죽쇼
boj.kr/1773
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, C] = input[0].split(" ").map(Number);
const S = new Array(C + 1).fill(0);
for (let n = 0; n < N; n++) {
  let sec = 1 * input[1 + n];
  for (let s = sec; s < C + 1; s += sec) {
    S[s] = 1;
  }
}
const ans = S.reduce((cur, acc) => cur + acc, 0);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
