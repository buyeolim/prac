/*
Pizza Deal
https://boj.kr/16693
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [A1, P1] = input[0].split(" ").map(Number);
const [R1, P2] = input[1].split(" ").map(Number);

const A2 = Math.PI * R1 ** 2;
const ans = A1 / P1 > A2 / P2 ? "Slice of pizza" : "Whole pizza";

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
