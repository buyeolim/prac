/*
Boiling Water
boj.kr/21612
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const B = 1 * input[0];
const P = 5 * B - 400;
const ans = [P, P === 100 ? 0 : P > 100 ? -1 : 1];
console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
