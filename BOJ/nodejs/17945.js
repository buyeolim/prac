/*
통학의 신
https://boj.kr/17945
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [A, B] = input[0].split(" ").map(Number);
const res = [-A - Math.sqrt(A ** 2 - B), -A + Math.sqrt(A ** 2 - B)];
const ans = res[0] !== res[1] ? res.join(" ") : res[1];

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
