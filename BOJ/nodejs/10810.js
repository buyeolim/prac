/*
공 넣기
boj.kr/10810
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const ans = new Array(N).fill(0);
for (let m = 0; m < M; m++) {
  const [i, j, k] = input[1 + m].split(" ").map(Number);
  for (let idx = i - 1; idx < j; idx++) {
    ans[idx] = k;
  }
}

console.log(ans.join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
