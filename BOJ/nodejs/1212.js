/*
8진수 2진수
boj.kr/1212
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = input[0].split("");
let ans = "";
for (let i = 0; i < N.length; i++) {
  ans +=
    i !== 0
      ? ("000" + parseInt(N[i], 8).toString(2)).slice(-3)
      : parseInt(N[i], 8).toString(2);
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
