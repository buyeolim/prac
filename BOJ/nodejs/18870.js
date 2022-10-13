/*
좌표 압축
boj.kr/18870
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const X = input[1].split(" ").map(Number);

let compTable = new Set(X);
compTable = [...compTable].sort((a, b) => a - b);
compTable = compTable.reduce((map, val, idx) => {
  map.set(val, idx);
  return map;
}, new Map());

let ans = "";
for (let i = 0; i < N; i++) {
  ans += `${compTable.get(X[i])} `;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
