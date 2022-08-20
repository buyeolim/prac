/*
A/B - 2
boj.kr/15792
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B] = input[0].split(" ").map(Number);

let ans = "",
  cnt = 0; // 소수점 자리수
let d, r; // 몫, 나머지

d = Math.floor(A / B);
ans += d.toString();
r = A % B;
while (r !== 0 && cnt <= 2000) {
  if (cnt === 0) ans += ".";

  r *= 10;
  d = Math.floor(r / B);
  ans += d.toString();
  r %= B;

  cnt++;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
