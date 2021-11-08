/*
두 수 비교하기
https://www.acmicpc.net/problem/1330
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const numbers = input[0].split(" ");

if (1 * numbers[0] > 1 * numbers[1]) {
  console.log(">");
} else if (1 * numbers[0] < 1 * numbers[1]) {
  console.log("<");
} else {
  console.log("==");
}
