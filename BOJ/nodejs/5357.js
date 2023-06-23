/*
Dedupe
boj.kr/5357
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

const ans = new Array(N).fill("");
for (let n = 0; n < N; n++) {
  const str = input[1 + n];
  let prev = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === prev) continue;

    ans[n] += str[i];
    prev = str[i];
  }
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
