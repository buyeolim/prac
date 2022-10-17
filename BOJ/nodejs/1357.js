/*
뒤집힌 덧셈
boj.kr/1357
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [X, Y] = input[0].split(" ");
let revSum =
  1 * X.split("").reverse().join("") + 1 * Y.split("").reverse().join("");
let ans = revSum.toString().split("").reverse().join("");
console.log(1 * ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
