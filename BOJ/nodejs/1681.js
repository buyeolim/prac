/*
줄 세우기
boj.kr/1681
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, L] = input[0].split(" ").map(Number);

let cnt = 0;
let ans = 0;
while (cnt < N) {
  ans++;
  if (String(ans).includes(`${L}`)) {
    continue;
  } else {
    cnt++;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
