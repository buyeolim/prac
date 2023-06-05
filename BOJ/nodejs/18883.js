/*
N M 찍기
boj.kr/18883
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const nums = Array.from({ length: N * M }, (v, i) => i + 1);
const mat = new Array(N).fill("");
for (let i = 0; i < N * M; i++) {
  let n = Math.floor(i / M);
  mat[n] += `${nums[i]} `;
}
const ans = mat.map((row) => row.trimEnd());

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
