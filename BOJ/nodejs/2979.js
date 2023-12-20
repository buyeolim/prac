/*
트럭 주차
https://boj.kr/2979
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [A, B, C] = input[0].split(" ").map(Number);
const T = new Array(101).fill(0);
for (let n = 0; n < 3; n++) {
  const [s, e] = input[1 + n].split(" ").map(Number);
  for (let t = s; t < e; t++) T[t]++;
}
const ans = T.reduce((acc, cur) => {
  if (cur === 0) return acc + cur;
  if (cur === 1) return acc + cur * A;
  if (cur === 2) return acc + cur * B;
  if (cur === 3) return acc + cur * C;
}, 0);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
