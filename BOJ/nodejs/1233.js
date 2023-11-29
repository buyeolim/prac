/*
주사위
https://boj.kr/1233
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const S = input[0].split(" ").map(Number);

const res = new Array(S.reduce((acc, cur) => acc + cur, 0) + 1).fill(0);
for (let i = 1; i < S[0] + 1; i++) {
  for (let j = 1; j < S[1] + 1; j++) {
    for (let k = 1; k < S[2] + 1; k++) {
      res[i + j + k]++;
    }
  }
}
const ans = res.indexOf(Math.max(...res));

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
