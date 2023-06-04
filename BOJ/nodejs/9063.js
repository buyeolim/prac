/*
대지
boj.kr/9063
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
let [x1, x2, y1, y2] = [10000, -10000, 10000, -10000];
for (let i = 0; i < N; i++) {
  const [x, y] = input[1 + i].split(" ").map(Number);

  x1 = Math.min(x1, x);
  y1 = Math.min(y1, y);
  x2 = Math.max(x2, x);
  y2 = Math.max(y2, y);
}

const ans = (x2 - x1) * (y2 - y1);
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
