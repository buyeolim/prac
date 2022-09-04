/*
알파벳 개수
boj.kr/10808
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const str = input[0].trimEnd();

const ans = Array(26).fill(0);
for (let ch of str) {
  ans[ch.charCodeAt() - 97]++;
}
console.log(ans.join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
