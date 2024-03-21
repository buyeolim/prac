/*
문자열 반복해서 출력하기
https://school.programmers.co.kr/learn/courses/30/lessons/181950
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
  rl.close();
}).on("close", function () {
  str = input[0];
  n = Number(input[1]);
  console.log(str.repeat(n));
});
