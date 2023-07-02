/*
아름다운 수
boj.kr/2774
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];
const ans = new Array(T);
for (let t = 0; t < T; t++) {
  const X = new Set(input[1 + t].trimEnd().split("").map(Number));
  ans[t] = X.size;
}
console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
