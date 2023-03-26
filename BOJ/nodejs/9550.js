/*
아이들은 사탕을 좋아해
boj.kr/9550
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let lc = 0;
const T = 1 * input[lc++];
const ans = new Array(T).fill(0);
for (let t = 0; t < T; t++) {
  const [N, K] = input[lc++].split(" ").map(Number);
  const C = input[lc++].split(" ").map(Number);

  for (let n = 0; n < N; n++) {
    ans[t] += Math.floor(C[n] / K);
  }
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
