/*
세로읽기
boj.kr/10798
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const note = Array.from({ length: 15 }, () => []);
for (let lc = 0; lc < 5; lc++) {
  const str = input[lc];
  for (let i = 0; i < str.length; i++) note[i].push(str[i]);
}

let ans = "";
note.forEach((line) => {
  ans += line.join("");
});
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
