/*
콘서트
https://boj.kr/16466
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = +input[0];
const A = input[1].split(" ").map(Number);

let ans;
let idx = 0;
A.sort((a, b) => a - b);
for (let n = 1; n <= 2 ** 31 - 1; n++) {
  if (n === A[idx]) {
    idx++;
    continue;
  }

  ans = n;
  break;
  Number.MAX_SAFE_INTEGER;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
