/*
Base Conversion
boj.kr/11576
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B] = input[0].split(" ").map(Number);
const m = 1 * input[1];
const digits = input[2].split(" ").map(Number);

let ans;
let dec = 0;
for (let i = 0; i < m; i++) {
  let n = m - 1 - i;
  dec += digits[i] * A ** n;
}
ans = dec
  .toString(B)
  .split("")
  .map((d) => parseInt(d, B));

console.log(ans.join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
