/*
헬멧과 조끼
https://boj.kr/15781
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const h = input[1].split(" ").map(Number);
const a = input[2].split(" ").map(Number);

const ans = Math.max(...h) + Math.max(...a);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
