/*
캥거루 세마리
boj.kr/2965
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B, C] = input[0].split(" ").map(Number);
let ans = (B - A > C - B ? B - A : C - B) - 1;
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
