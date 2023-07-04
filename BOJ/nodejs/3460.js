/*
이진수
boj.kr/3460
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];
const ans = new Array(T);
for (let t = 0; t < T; t++) {
  const n = 1 * input[1 + t];

  let digit = 0;
  let res = [];
  let tmp = n;
  while (tmp > 0) {
    const d = Math.floor(tmp / 2);
    tmp % 2 === 1 && res.push(digit);
    tmp = d;
    digit++;
  }

  ans[t] = res.join(" ");
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
