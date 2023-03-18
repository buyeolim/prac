/*
인공지능 시계
boj.kr/2530
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B, C] = input[0].split(" ").map(Number);
const D = 1 * input[1];

const ans = [0, 0, 0];
let seconds = A * 3600 + B * 60 + C + D;
let hh = Math.floor(seconds / 3600);
let mm = Math.floor((seconds % 3600) / 60);
let ss = Math.floor((seconds % 3600) % 60);
ans[0] = hh >= 24 ? hh % 24 : hh;
ans[1] = mm;
ans[2] = ss;

console.log(ans.join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
