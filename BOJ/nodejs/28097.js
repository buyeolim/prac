/*
모범생 포닉스
boj.kr/28097
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const T = input[1].replace(/ /g, "-8-").split("-").map(Number);

const total = T.reduce((acc, cur) => acc + cur, 0);
const ans = [Math.floor(total / 24), total % 24];
console.log(ans.join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
