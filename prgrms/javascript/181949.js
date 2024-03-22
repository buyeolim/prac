/*
대소문자 바꿔서 출력하기
https://school.programmers.co.kr/learn/courses/30/lessons/181949
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
  rl.close();
}).on("close", function () {
  str = input[0]
    .split("")
    .map((ch) =>
      ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()
    )
    .join("");

  console.log(str);
});
