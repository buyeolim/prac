/*
핸드폰 요금
boj.kr/1267
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const T = input[1].split(" ").map(Number);

let ans;
let [Y, M] = [0, 0];
for (let i = 0; i < N; i++) {
  Y += (Math.floor(T[i] / 30) + 1) * 10;
  M += (Math.floor(T[i] / 60) + 1) * 15;
}

if (Y < M) {
  ans = `Y ${Y}`;
} else if (Y > M) {
  ans = `M ${M}`;
} else {
  ans = `Y M ${Y}`;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
