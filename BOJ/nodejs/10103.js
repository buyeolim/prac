/*
주사위 게임
boj.kr/10103
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0];
const ans = [100, 100];
for (let i = 0; i < n; i++) {
  const [a, b] = input[1 + i].split(" ");

  if (a < b) {
    ans[0] -= b;
  } else if (a > b) {
    ans[1] -= a;
  }
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
