/*
Do Not Touch Anything
https://boj.kr/13136
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [R, C, N] = input[0].split(" ").map(Number); // [가로, 세로, 범위]
const ans = Math.ceil(R / N) * Math.ceil(C / N);
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
