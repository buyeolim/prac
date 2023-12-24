/*
호반우가 학교에 지각한 이유 1
https://boj.kr/30468
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [STR, DEX, INT, LUK, N] = input[0].split(" ").map(Number);
const ans =
  N * 4 - (STR + DEX + INT + LUK) > 0 ? N * 4 - (STR + DEX + INT + LUK) : 0;
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
