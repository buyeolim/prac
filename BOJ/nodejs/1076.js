/*
저항
boj.kr/1076
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const R = {
  black: [0, 1],
  brown: [1, 10],
  red: [2, 100],
  orange: [3, 1000],
  yellow: [4, 10000],
  green: [5, 100000],
  blue: [6, 1000000],
  violet: [7, 10000000],
  grey: [8, 100000000],
  white: [9, 1000000000],
};
let ans = "";
ans += R[input[0].trimEnd()][0].toString();
ans += R[input[1].trimEnd()][0].toString();
ans *= R[input[2]][1];
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
