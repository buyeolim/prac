/*
문자가 몇갤까
boj.kr/7600
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const ans = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === "#") break;

  const S = input[i].toUpperCase();
  const cnt = new Array(26).fill(0);
  for (let ch of S) {
    const code = ch.charCodeAt();
    if (code >= 65 && code <= 90) cnt[code - 65] = 1;
  }
  ans[i] = cnt.reduce((cur, acc) => acc + cur, 0);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
