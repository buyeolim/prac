/*
크냐?
boj.kr/4101
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const ans = [];

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  if (a + b === 0) break;

  a > b ? ans.push("Yes") : ans.push("No");
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
