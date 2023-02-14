/*
2진수 8진수
boj.kr/1373
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const bin = input[0];

let ans = "";
let tmp = "";
for (let i = bin.length - 1; i >= 0; i--) {
  tmp = bin[i] + tmp;
  if (tmp.length >= 3 || i === 0) {
    let dec = parseInt(tmp, 2);
    ans = dec.toString(8) + ans;
    tmp = "";
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
