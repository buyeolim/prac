/*
단어 공부
https://www.acmicpc.net/problem/1157
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let word = input[0].toUpperCase();

let letters = Array.from({ length: 26 }, () => 0);
for (let letter of word) {
  let idx = letter.charCodeAt() - 65;
  letters[idx]++;
}

let max = Math.max(...letters);
let arr = [];
for (let i = 0; i < 26; i++) {
  if (letters[i] === max) arr.push(String.fromCharCode(65 + i));
}

let ans = "?";
if (arr.length === 1) ans = arr[0];

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
