/*
Can you add this?
boj.kr/7891
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];
const ans = new Array(T);
for (let t = 0; t < T; t++) {
  ans[t] = input[1 + t]
    .split(" ")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
