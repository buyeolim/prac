/*
The Fastest Sorting Algorithm In The World
boj.kr/23235
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let i = 0;
while (true) {
  const N = input[i++].split(" ").map(Number);
  if (N[0] === 0) break;

  console.log(`Case ${i}: Sorting... done!`);
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
