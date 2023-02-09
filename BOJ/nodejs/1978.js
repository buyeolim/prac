/*
소수 찾기
boj.kr/1978
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const nums = input[1].split(" ").map(Number);

let ans = 0;
const max = Math.max(...nums);
const isPrime = Array.from({ length: max + 1 }, () => true);
isPrime[0] = isPrime[1] = false;
for (let n = 2; n <= max; n++) {
  if (isPrime[n] === false) continue;
  for (let i = n; i <= max; i += n) {
    if (i === n) continue;
    if (i % n === 0) isPrime[i] = false;
  }
}

for (let n of nums) {
  isPrime[n] === true ? ans++ : null;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
