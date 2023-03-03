/*
컵홀더
boj.kr/2810
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
let seats = input[1].trimEnd();

let ans;
let audience = seats.length;
seats = seats.replaceAll("LL", "-");
let holder = seats.length + 1;
ans = audience >= holder ? holder : audience;

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
