/*
서로 다른 부분 문자열의 개수
boj.kr/11478
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const S = input[0];
const ans = new Set();

let len = 1;
while (len <= S.length) {
  for (let i = 0; i <= S.length - len; i++) {
    let subStr = S.substring(i, i + len);
    ans.add(subStr);
  }

  len++;
}

console.log(ans.size);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
