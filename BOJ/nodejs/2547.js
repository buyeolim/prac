/*
사탕 선생 고창영
boj.kr/2547
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let lc = 0;
const T = 1 * input[lc++];
const ans = new Array(T).fill("");

for (let t = 0; t < T; t++) {
  lc++;
  const N = 1 * input[lc++];

  let sum = 0n;
  for (let n = 0; n < N; n++) {
    let candy = BigInt(input[lc++]);
    sum += candy;
  }
  sum % BigInt(N) === 0n ? (ans[t] = "YES") : (ans[t] = "NO");
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
