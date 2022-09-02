/*
팰린드롬수
boj.kr/1259
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = 0;
while (input[line] !== "0") {
  let number = input[line++].trimEnd();
  console.log(number === number.split("").reverse().join("") ? "yes" : "no");
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
