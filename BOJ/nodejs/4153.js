/*
직각삼각형
boj.kr/4153
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = 0;
while (input[line] !== "0 0 0") {
  const sides = input[line++].split(" ").map(Number);
  sides.sort((a, b) => a - b);
  console.log(
    sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2 ? "right" : "wrong"
  );
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
