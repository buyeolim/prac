/*
상수
https://www.acmicpc.net/problem/2908
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [A, B] = input[0].split(" ");

let rA = "",
  rB = "";
for (let i = 0; i < 3; i++) {
  rA += A[2 - i];
  rB += B[2 - i];
}

rA = 1 * rA;
rB = 1 * rB;
let ans = Math.max(rA, rB);
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
