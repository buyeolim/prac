/*
쉽게 푸는 문제
boj.kr/1292
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B] = input[0].split(" ").map(Number);

let ans = 0;
let N = 1;
let cnt = 1;
while (cnt <= B) {
  for (let i = 0; i < N; i++) {
    if (cnt > B) break;
    if (cnt >= A) ans += N;
    cnt++;
  }

  N++;
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
