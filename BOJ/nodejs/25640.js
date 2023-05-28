/*
MBTI
boj.kr/25640
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const jinho = input[0].trimEnd();
const N = 1 * input[1].trimEnd();
let ans = 0;
for (let n = 0; n < N; n++) {
  const mbti = input[2 + n].trimEnd();
  mbti === jinho && ans++;
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
