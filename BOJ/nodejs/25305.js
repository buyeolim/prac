/*
커트라인
boj.kr/25305
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, k] = input[0].split(" ").map((ele) => ele * 1);
const X = input[1].split(" ").map((ele) => ele * 1);

X.sort(function (a, b) {
  return b - a;
});
let ans = X[k - 1];
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
