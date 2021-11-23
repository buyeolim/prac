/*
알람 시계
https://www.acmicpc.net/problem/2884
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [H, M] = input[0].split(" ").map((ele) => 1 * ele);

let newH = 0,
  newM = 0;
if (M - 45 < 0) {
  newM = M - 45 + 60;
  if (H - 1 < 0) {
    newH = H - 1 + 24;
  } else {
    newH = H - 1;
  }
} else {
  newM = M - 45;
  newH = H;
}

console.log(newH, newM);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
