/*
영수증
boj.kr/25304
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const X = input[0] * 1;
const N = input[1] * 1;
let total = 0;
for (let n = 0; n < N; n++) {
  let [a, b] = input[2 + n].split(" ").map((ele) => ele * 1);
  total += a * b;
}
X === total ? console.log("Yes") : console.log("No");

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
