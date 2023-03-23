/*
HOMWRK
boj.kr/18398
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let lc = 0;
const ans = [];
const T = 1 * input[lc++];
for (let t = 0; t < T; t++) {
  const N = 1 * input[lc++];
  for (let n = 0; n < N; n++) {
    const [A, B] = input[lc++].split(" ").map(Number);
    ans.push(`${A + B} ${A * B}`);
  }
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
