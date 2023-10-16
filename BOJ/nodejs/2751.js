/*
수 정렬하기 2
https://boj.kr/2751
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = 1 * input[0];

const ans = new Array(N);
for (let n = 0; n < N; n++) {
  ans[n] = 1 * input[1 + n];
}
ans.sort((a, b) => a - b);

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
