/*
문자열 집합
14425
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const S = new Set();
for (let n = 0; n < N; n++) {
  S.add(input[1 + n]);
}
let ans = 0;
for (let m = 0; m < M; m++) {
  let str = input[1 + N + m];
  if (S.has(str)) ans++;
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
