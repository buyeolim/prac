/*
덧셈식 출력하기
https://school.programmers.co.kr/learn/courses/30/lessons/181947
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
  rl.close();
}).on("close", function () {
  console.log(`${input[0]} + ${input[1]} = ${input[0] + input[1]}`);
});
