/*
대칭 차집합
boj.kr/1269
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [lenA, lenB] = input[0].split(" ").map(Number);
const A = new Set(input[1].split(" ").map(Number));
const B = new Set(input[2].split(" ").map(Number));

const U = new Set([...A, ...B]); // Union
const SD = new Set([...U]); // Symmetric difference
for (let e of U) {
  if (A.has(e) && B.has(e)) {
    SD.delete(e);
  }
}

console.log(SD.size);

const end = new Date().getTime();

console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
