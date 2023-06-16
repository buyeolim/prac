/*
가장 큰 금민수
boj.kr/1526
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

let ans;
for (let n = N; n >= 4; n--) {
  if (n.toString().length === String(n).match(/[4|7]/g)?.length) {
    ans = n;
    break;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
