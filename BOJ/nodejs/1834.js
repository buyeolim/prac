/*
나머지와 몫이 같은 수
boj.kr/1834
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

let ans = 0n; // bigint
for (let i = 1; i < N; i++) {
  ans += BigInt(N * i + i);
}

console.log(ans.toString());

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
