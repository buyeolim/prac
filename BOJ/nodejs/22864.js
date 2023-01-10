/*
피로도
boj.kr/22864
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B, C, M] = input[0].split(" ").map(Number);

let hour = 0;
let ans = 0;
let tiredness = 0;
while (hour < 24) {
  if (tiredness + A > M) {
    tiredness -= C;
    tiredness < 0 ? (tiredness = 0) : null;
  } else {
    tiredness += A;
    ans += B;
  }

  hour++;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
