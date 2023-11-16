/*
An Easy-Peasy Problem
https://boj.kr/30214 
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const S = input[0].split(" ").map(Number);
const ans = S[0] * 2 >= S[1] ? "E" : "H";

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
