/*
Angles
boj.kr/15178
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const ans = new Array(N).fill(0);
for (let n = 0; n < N; n++) {
  let [i, j, k] = input[1 + n].split(" ").map(Number);

  if (i + j + k === 180) {
    ans[n] = `${i} ${j} ${k} Seems OK`;
  } else {
    ans[n] = `${i} ${j} ${k} Check`;
  }
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
