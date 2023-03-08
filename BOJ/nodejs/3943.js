/*
헤일스톤 수열
boj.kr/3943
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];

let ans = [];
for (let t = 0; t < T; t++) {
  let n = 1 * input[1 + t];
  let res = n;
  while (n > 1) {
    n % 2 === 0 ? (n = Math.floor(n / 2)) : (n = n * 3 + 1);
    res = Math.max(n, res);
  }
  ans.push(res);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
