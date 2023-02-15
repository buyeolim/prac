/*
부분 문자열
boj.kr/6550
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = new Array();
for (let tc = 0; tc < input.length; tc++) {
  if (input[tc] === "") break;

  let [s, t] = input[tc].split(" ");

  let cnt = 0;
  let idx = 0;
  for (let ch of t) {
    if (cnt === s.length) break;

    if (ch === s[idx]) {
      cnt++;
      idx++;
    }
  }

  cnt === s.length ? ans.push("Yes") : ans.push("No");
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
