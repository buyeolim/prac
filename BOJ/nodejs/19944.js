/*
뉴비의 기준은 뭘까?
boj.kr/19944
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let ans;
if (M <= 2) {
  ans = "NEWBIE!";
} else if (M <= N) {
  ans = "OLDBIE!";
} else {
  ans = "TLE!";
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
