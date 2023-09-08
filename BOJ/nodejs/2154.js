/*
수 이어 쓰기 3
boj.kr/2154
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = input[0];

let ans;
const S = Array.from({ length: N }, (v, i) => i + 1).join("");
for (let i = 0; i <= S.length - N.length; i++) {
  let n = "";
  for (let j = 0; j < N.length; j++) {
    n += S[i + j];
  }

  if (N === n) {
    ans = i + 1;
    break;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
