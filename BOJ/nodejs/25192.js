/*
인사성 밝은 곰곰이
boj.kr/25192
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

let ans = 0;
let greetings;
for (let n = 0; n < N; n++) {
  const chat = input[1 + n];
  if (chat === "ENTER") {
    greetings = new Set();
    continue;
  }

  if (!greetings.has(chat)) {
    greetings.add(chat);
    ans++;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
