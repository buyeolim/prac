/*
조합
boj.kr/2407
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let ans;
let memo = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
memo[0][0] = memo[1][0] = memo[1][1] = 1n;
for (let i = 2; i < n + 1; i++) {
  for (let j = 0; j < m + 1; j++) {
    if (j === 0 || j === i) {
      memo[i][j] = 1n;
    } else {
      memo[i][j] = memo[i - 1][j - 1] + memo[i - 1][j];
    }
  }
}

ans = memo[n][m].toString();
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
