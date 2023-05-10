/*
모음의 개수
boj.kr/1264
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let lc = 0;
let ans = [];
while (true) {
  const str = input[lc++];
  if (str === "#") break;

  const res = str.match(/[aeiou]/gi);
  ans.push(res ? res.length : 0);
}
console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
