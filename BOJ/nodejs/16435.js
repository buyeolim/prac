/*
스네이크버드
boj.kr/16435
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, L] = input[0].split(" ").map(Number);
const H = input[1].split(" ").map(Number);

H.sort((a, b) => a - b);
let ans = L;
for (let i = 0; i < N; i++) {
  if (H[i] <= ans) ans++;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
