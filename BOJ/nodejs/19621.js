/*
회의실 배정 2
boj.kr/19621
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const K = [];

for (let n = 0; n < N; n++) {
  let [s, e, p] = input[1 + n].split(" ").map(Number);
  K.push([s, e, p]);
}

let ans = 0;

function dfs(n, sum) {
  if (n >= N && sum > ans) {
    ans = sum;
    return;
  }

  for (let i = n; i < N; i++) {
    dfs(i + 2, sum + K[i][2]);
  }
}

dfs(0, 0);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
