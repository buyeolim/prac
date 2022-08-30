/*
음계
boj.kr/2920
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const tones = input[0].split(" ").map(Number);

const ascending = [1, 2, 3, 4, 5, 6, 7, 8];
const descending = [8, 7, 6, 5, 4, 3, 2, 1];
let ans;
if (tones.join("") === ascending.join("")) {
  ans = "ascending";
} else if (tones.join("") === descending.join("")) {
  ans = "descending";
} else {
  ans = "mixed";
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
