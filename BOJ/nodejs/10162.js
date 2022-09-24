/*
전자레인지
boj.kr/10162
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];

const A = 5 * 60,
  B = 1 * 60,
  C = 10;

let ans = [0, 0, 0];
let r = T;
ans[0] += Math.floor(r / A);
r = r % A;
ans[1] += Math.floor(r / B);
r = r % B;
ans[2] += Math.floor(r / C);

console.log(r % C === 0 ? ans.join(" ") : -1);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
