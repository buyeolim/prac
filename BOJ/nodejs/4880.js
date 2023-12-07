/*
다음수
https://boj.kr/4880
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

let lc = 0;
const res = new Array();
while (true) {
  const A = input[lc++].split(" ").map(Number);
  if (!A[0] && !A[1] && !A[2]) break;

  if (A[2] - A[1] === A[1] - A[0]) {
    res.push(`AP ${A[2] + (A[1] - A[0])}`);
  } else {
    res.push(`GP ${A[2] * (A[1] / A[0])}`);
  }
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
