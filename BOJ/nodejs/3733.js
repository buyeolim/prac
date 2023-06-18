/*
Shares
boj.kr/3733
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

input[input.length - 1] === "" && input.pop();
const ans = new Array(input.length);
for (let i = 0; i < input.length; i++) {
  const [N, S] = input[i].split(" ").map(Number);
  ans[i] = Math.floor(S / (N + 1));
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
