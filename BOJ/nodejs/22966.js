/*
가장 쉬운 문제를 찾는 문제
boj.kr/22966
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

let ans;
let min = 5;
for (let n = 0; n < N; n++) {
  const [title, level] = input[1 + n].split(" ");
  if (level < min) {
    min = level;
    ans = title;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
