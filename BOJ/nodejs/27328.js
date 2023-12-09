/*
Three-Way Comparison
https://boj.kr/27328
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [A, B] = input.map(Number);
const ans = A > B ? 1 : A === B ? 0 : -1;
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
