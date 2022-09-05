/*
Hashing
boj.kr/15829
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const L = 1 * input[0];
const str = input[1].trimEnd();

const [r, M] = [31, 1234567891];
let ans = 0,
  ri = 1;
for (let i = 0; i < L; i++) {
  ans += ((str[i].charCodeAt() - 96) * ri) % M;
  ri = (ri * r) % M;
}
ans %= M;

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
