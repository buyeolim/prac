/*
Rats
boj.kr/18301
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n1, n2, n12] = input[0].split(" ").map(Number);

const ans = Math.floor(((n1 + 1) * (n2 + 1)) / (n12 + 1) - 1);
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
