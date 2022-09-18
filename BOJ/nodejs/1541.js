/*
잃어버린 괄호
boj.kr/1541
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const nums = input[0]
  .replace(/[+, -]/g, " ")
  .split(" ")
  .map(Number);
const ops = input[0].replace(/[0-9]/g, "").split("");
let neg = false;
let ans = 0;
let idx = 0;

while (nums.length + ops.length) {
  if (idx % 2 === 0) {
    // 숫자
    let num = nums.shift();
    neg === true ? (ans -= num) : (ans += num);
  } else {
    // 연산자
    let op = ops.shift();

    op === "-" ? (neg = true) : null;
  }

  idx++;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
