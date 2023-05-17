/*
세탁소 사장 동혁
boj.kr/2720
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];

const ans = new Array(T);
for (let t = 0; t < T; t++) {
  let C = 1 * input[1 + t];

  let Q = Math.floor(C / 25);
  C %= 25;
  let D = Math.floor(C / 10);
  C %= 10;
  let N = Math.floor(C / 5);
  C %= 5;
  let P = C;

  ans[t] = `${Q} ${D} ${N} ${P}`;
}

console.log(ans.join("\n"));

console.log();
const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
