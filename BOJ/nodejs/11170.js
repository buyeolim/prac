/*
0의 개수
boj.kr/11170
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];

let ans = new Array(T).fill(0);
for (let tc = 0; tc < T; tc++) {
  const [N, M] = input[1 + tc].split(" ").map(Number);
  for (let num = N; num < M + 1; num++) {
    let arr = num.toString().match(/0/g);
    ans[tc] += arr ? arr.length : 0;
  }
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
