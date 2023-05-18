/*
숫자
boj.kr/10093
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B] = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const ans = [0, ""];
A !== B && (ans[0] = B - A - 1);
for (let i = A + 1; i < B; i++) {
  ans[1] += `${i} `;
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
