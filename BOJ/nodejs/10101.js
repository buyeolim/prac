/*
삼각형 외우기
boj.kr/10101
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B, C] = input.map(Number);

let ans;
if (A + B + C !== 180) {
  ans = "Error";
} else if (A === 60 && B === 60 && C === 60) {
  ans = "Equilateral";
} else if (A !== B && B !== C && C !== A) {
  ans = "Scalene";
} else {
  ans = "Isosceles";
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
