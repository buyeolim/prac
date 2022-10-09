/*
ROT13
boj.kr/11655
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const S = input[0].trimEnd();

let ans = "";
for (let ch of S) {
  let code = ch.charCodeAt();
  if (ch.toLowerCase() != ch.toUpperCase()) {
    if (code >= 97) {
      code + 13 > 122 ? (code -= 13) : (code += 13);
    } else {
      code + 13 > 90 ? (code -= 13) : (code += 13);
    }
  }

  ans += String.fromCharCode(code);
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
