/*
카이사르 암호
boj.kr/5598
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const S = input[0];

let ans = "";
for (let ch of S) {
  let code = ch.charCodeAt() - 3;
  if (code < "A".charCodeAt()) {
    code = "Z".charCodeAt() + 1 - ("A".charCodeAt() - code);
  }
  ans += String.fromCharCode(code);
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
