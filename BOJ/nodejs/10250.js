/*
ACM 호텔
boj.kr/10250
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];
for (let t = 0; t < T; t++) {
  let [H, W, N] = input[1 + t].split(" ").map(Number);
  let YY, XX;

  N % H === 0 ? (YY = H) : (YY = N % H);
  N % H === 0 ? (XX = Math.floor(N / H)) : (XX = Math.floor(N / H) + 1);

  console.log(`${YY}${XX < 10 ? "0" + XX.toString() : XX}`);
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
