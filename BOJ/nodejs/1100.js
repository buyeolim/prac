/*
하얀 칸
boj.kr/
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = input.reduce((acc, cur, row) => {
  let start = row % 2 === 0 ? 0 : 1;
  for (let col = start; col < 8; col += 2) {
    cur[col] === "F" ? acc++ : null;
  }

  return acc;
}, 0);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
