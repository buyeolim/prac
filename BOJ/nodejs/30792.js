/*
gahui and sousenkyo 2
https://boj.kr/30792
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const n = +input[0];
const v = +input[1];
const V = input[2].split(" ").map(Number);

V.push(v);
V.sort((a, b) => b - a);
const ans = V.indexOf(v) + 1;

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
