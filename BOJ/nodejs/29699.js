/*
Welcome to SMUPC!
https://boj.kr/29699
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = +input[0];

const S = "WelcomeToSMUPC";
const ans = S[!(N % 14) ? 13 : (N % 14) - 1];

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
