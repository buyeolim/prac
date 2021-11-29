/*
다이얼
https://www.acmicpc.net/problem/5622
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let word = input[0];

let ans = 0;
for (let letter of word) {
  let code = letter.charCodeAt() - 65;
  if (code <= 2) {
    // #2 ABC
    ans += 3;
  } else if (code > 2 && code <= 5) {
    // #3 DEF
    ans += 4;
  } else if (code > 5 && code <= 8) {
    // #4 GHI
    ans += 5;
  } else if (code > 8 && code <= 11) {
    // #5 JKL
    ans += 6;
  } else if (code > 11 && code <= 14) {
    // #6 MNO
    ans += 7;
  } else if (code > 14 && code <= 18) {
    // #7 PQRS
    ans += 8;
  } else if (code > 18 && code <= 21) {
    // #8 TUV
    ans += 9;
  } else {
    // #9 WXYZ
    ans += 10;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
