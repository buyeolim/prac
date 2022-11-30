/*
좌표 정렬하기
boj.kr/11650
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const pos = [];
for (let i = 0; i < N; i++) {
  pos.push(input[1 + i].split(" ").map(Number));
}

pos.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  else return a[0] - b[0];
});

console.log(pos.map((p) => p.join(" ")).join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
