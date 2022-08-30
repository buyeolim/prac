/*
학점계산
boj.kr/2754
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans;
switch (input[0]) {
  case "A+":
    ans = 4.3;
    break;
  case "A0":
    ans = 4.0;
    break;
  case "A-":
    ans = 3.7;
    break;
  case "B+":
    ans = 3.3;
    break;
  case "B0":
    ans = 3.0;
    break;
  case "B-":
    ans = 2.7;
    break;
  case "C+":
    ans = 2.3;
    break;
  case "C0":
    ans = 2.0;
    break;
  case "C-":
    ans = 1.7;
    break;
  case "D+":
    ans = 1.3;
    break;
  case "D0":
    ans = 1.0;
    break;
  case "D-":
    ans = 0.7;
    break;
  default:
    ans = 0.0;
    break;
}

console.log(ans.toFixed(1));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
