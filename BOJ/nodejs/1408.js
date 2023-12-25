/*
24
https://boj.kr/1408
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const C = input[0].split(":").map(Number);
const S = input[1].split(":").map(Number);

const c = C[0] * 3600 + C[1] * 60 + C[2];
const s = S[0] * 3600 + S[1] * 60 + S[2];

const diff = s - c < 0 ? s - c + 24 * 3600 : s - c;
const hh = Math.floor(diff / 3600)
  .toString()
  .padStart(2, 0);
const mm = Math.floor((diff % 3600) / 60)
  .toString()
  .padStart(2, 0);
const ss = Math.floor((diff % 3600) % 60)
  .toString()
  .padStart(2, 0);

const ans = `${hh}:${mm}:${ss}`;

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
