/*
부호
boj.kr/1247
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let lc = 0;
for (let tc = 0; tc < 3; tc++) {
  const N = 1 * input[lc++];
  let S = BigInt(0);
  for (let n = 0; n < N; n++) {
    S += BigInt(input[lc++]);
  }

  let ans = 0;
  if (S > 0) {
    ans = "+";
  } else if (S < 0) {
    ans = "-";
  }
  console.log(ans);
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
