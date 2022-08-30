/*
문자열
boj.kr/9086
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];
let ans = "";
for (let t = 0; t < T; t++) {
  input[1 + t] = input[1 + t].trimEnd();
  ans += input[1 + t].at(0) + input[1 + t].at(input[1 + t].length - 1) + "\n";
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
