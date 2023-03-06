/*
소수 단어
boj.kr/2153
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const word = input[0];

let ans;
let num = 0;
for (let ch of word) {
  if (ch === ch.toLowerCase()) {
    num += ch.charCodeAt() - 96;
  } else {
    num += ch.charCodeAt() - 64 + 26;
  }
}

ans = "It is a prime word.";
for (let d = 2; d <= Math.sqrt(num); d++) {
  if (num % d === 0) {
    ans = "It is not a prime word.";
    break;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
