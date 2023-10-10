/*
분해합
boj.kr/2231
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

let ans = 0;
for (let m = 1; m < N; m++) {
  const M =
    String(m)
      .split("")
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0) + m;

  if (M === N) {
    ans = m;
    break;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
