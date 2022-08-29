/*
행렬 덧셈
boj.kr/2738
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let ans = "";
for (let r = 0; r < N; r++) {
  let a = input[1 + r].split(" ").map(Number);
  let b = input[1 + N + r].split(" ").map(Number);
  for (let c = 0; c < M; c++) {
    ans += `${a[c] + b[c]} `;
  }
  ans += "\n";
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
