/*
Quadratics
boj.kr/26548
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0];
const ans = new Array(n);
for (let t = 0; t < n; t++) {
  const [a, b, c] = input[1 + t].split(" ").map(Number);

  ans[t] = `${((-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)).toFixed(3)}, ${(
    (-b - Math.sqrt(b ** 2 - 4 * a * c)) /
    (2 * a)
  ).toFixed(3)}`;
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
