/*
모비스
boj.kr/28074
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const S = input[0];

let ans = true;
ans = ans && S.match(/M/) ? true : false;
ans = ans && S.match(/O/) ? true : false;
ans = ans && S.match(/B/) ? true : false;
ans = ans && S.match(/I/) ? true : false;
ans = ans && S.match(/S/) ? true : false;

console.log(ans ? "YES" : "NO");

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
