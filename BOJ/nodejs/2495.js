/*
연속구간
boj.kr/2495
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num, cnt, ans;
for (let t = 0; t < 3; t++) {
  num = input[t];
  ans = 1;
  for (let i = 0; i < 8; i++) {
    if (i === 0) cnt = 1;

    if (num[i] !== num[i - 1]) cnt = 1;
    else cnt++;

    ans = Math.max(ans, cnt);
  }

  console.log(ans);
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
