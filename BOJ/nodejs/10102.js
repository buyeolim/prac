/*
개표
boj.kr/10102
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const V = 1 * input[0];
const res = input[1].trimEnd().split("");
let sum = [0, 0];
for (let i = 0; i < V; i++) {
  res[i] === "A" ? sum[0]++ : sum[1]++;
}

console.log(sum[0] === sum[1] ? "Tie" : sum[0] > sum[1] ? "A" : "B");

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
