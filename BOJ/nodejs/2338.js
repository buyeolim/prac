/*
긴자리 계산
boj.kr/2338
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const A = BigInt(input[0]);
const B = BigInt(input[1]);

const ans = [(A + B).toString(), (A - B).toString(), (A * B).toString()];
console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
