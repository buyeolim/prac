/*
진법 변환
boj.kr/2745
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, B] = input[0].split(" ");

let ans = 0;
for (let i = 0; i < N.length; i++) {
  const digit = isNaN(N[i]) ? N[i].charCodeAt() - 55 : 1 * N[i];
  const e = N.length - 1 - i;
  ans += digit * B ** e;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
