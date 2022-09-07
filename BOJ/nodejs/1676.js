/*
팩토리얼 0의 개수
boj.kr/1676
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

let ans = 0;
for (let n = 1; n < N + 1; n++) {
  if (n % 5 !== 0) continue;
  let tmp = n;
  while (tmp % 5 === 0) {
    ans++;
    tmp /= 5;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
