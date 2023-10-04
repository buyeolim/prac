/*
Farm
boj.kr/16283
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b, n, w] = input[0].split(" ").map(Number);

const sol = new Array();
for (let s = 1; s < n; s++) {
  let g = n - s;
  a * s + b * g === w ? sol.push([s, g]) : null;
}
const ans = sol.length === 1 ? sol[0].join(" ") : -1;

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
