/*
오븐 시계
boj.kr/2525
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B] = input[0].split(" ").map((ele) => 1 * ele);
const C = 1 * input[1];

let hh, mm;
mm = (B + C) % 60;
hh = A + parseInt((B + C) / 60);
hh >= 24 ? (hh -= 24) : "";

console.log(hh, mm);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
