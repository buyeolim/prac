/*
몇개고?
boj.kr/27294
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [T, S] = input[0].split(" ").map(Number);

let ans;
if (S === 0) {
  ans = T >= 12 && T <= 16 ? 320 : 280;
} else {
  ans = 280;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
