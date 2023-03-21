/*
수학은 비대면강의입니다
boj.kr/19532
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b, c, d, e, f] = input[0].split(" ").map(Number);

const ans = [null, null];

const A = [a * d, b * d, c * d];
const B = [d * a, e * a, f * a];

ans[1] = (A[2] - B[2]) / (A[1] - B[1]); // y
// x
if (a !== 0) {
  ans[0] = (c - b * ans[1]) / a;
} else {
  ans[0] = (f - e * ans[1]) / d;
}

console.log(ans.join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
