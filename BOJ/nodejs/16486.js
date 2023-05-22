/*
운동장 한 바퀴
boj.kr/16486
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const d1 = 1 * input[0];
const d2 = 1 * input[1];

let ans = 2 * (3.141592 * d2 + d1);
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
