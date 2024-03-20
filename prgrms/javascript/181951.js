/*
a와 b 출력하기
https://school.programmers.co.kr/learn/courses/30/lessons/181951
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
  console.log("a = " + input[0] + "\nb = " + input[1]);
});
