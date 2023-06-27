/*
평균은 넘겠지
boj.kr/4344
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const C = 1 * input[0];
const ans = new Array(C).fill(0);
for (let c = 0; c < C; c++) {
  const [N, ...nums] = input[1 + c].split(" ").map(Number);

  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const avg = sum / N;

  ans[c] = `${((nums.filter((val) => val > avg).length / N) * 100).toFixed(
    3
  )}%`;
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
