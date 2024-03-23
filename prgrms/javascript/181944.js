/*
홀짝 구분하기
https://school.programmers.co.kr/learn/courses/30/lessons/181944
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
  n = Number(input[0]);
  console.log(`${n} is ${n % 2 ? "odd" : "even"}`);
});
