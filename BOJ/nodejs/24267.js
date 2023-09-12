/*
알고리즘 수업 - 알고리즘의 수행 시간 6
boj.kr/24267
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = BigInt(input[0]);

const ans = [(n * (n - 1n) * (n - 2n)) / 6n, 3];

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
