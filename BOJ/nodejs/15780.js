/*
멀티탭 충분하니?
boj.kr/15780
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

let outlet = 0;
A.forEach((tab) => (outlet += Math.ceil(tab / 2)));
const ans = N <= outlet ? "YES" : "NO";

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
