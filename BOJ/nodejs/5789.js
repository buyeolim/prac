/*
한다 안한다
boj.kr/5789
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

const ans = new Array(N).fill("Do-it");
for (let n = 0; n < N; n++) {
  const bin = input[1 + n];
  let idx = bin.length / 2 - 1;

  // 가운데 비교
  if (bin[idx] !== bin[idx + 1]) {
    ans[n] += "-Not";
    continue;
  }
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
