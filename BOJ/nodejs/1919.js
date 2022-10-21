/*
애너그램 만들기
boj.kr/1919
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const A = input[0].trimEnd();
const B = input[1].trimEnd();

const lettersA = Array(26).fill(0);
for (let letter of A) {
  lettersA[letter.charCodeAt() - 97]++;
}
const lettersB = Array(26).fill(0);
for (let letter of B) {
  lettersB[letter.charCodeAt() - 97]++;
}

let ans = 0;
for (let i = 0; i < 26; i++) {
  if (lettersA[i] !== lettersB[i]) {
    ans += Math.abs(lettersA[i] - lettersB[i]);
  }
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
