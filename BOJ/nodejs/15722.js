/*
빙글빙글 스네일
boj.kr/15722
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0];
const pos = [0, 0];
let sign = 1;
let val = 1;
for (let s = 0; s < n; s++) {
  if (pos[1] !== sign * val) {
    pos[1] += sign * 1;
  } else if (pos[0] !== sign * val) {
    pos[0] += sign * 1;
  }

  if (pos[0] === sign * val && pos[1] === sign * val) {
    sign *= -1;
  }
  if (pos[0] + pos[1] === -2 * val) val++;
}

let ans = pos.join(" ");
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
