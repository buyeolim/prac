/*
!밀비 급일
boj.kr/11365
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = "";
for (let sentence of input) {
  if (sentence === "END") break;

  for (let i = sentence.length - 1; i >= 0; i--) {
    ans += sentence[i];
  }
  ans += "\n";
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
