/*
임시 반장 정하기
boj.kr/1268
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const table = [null]; // row: students, col: grades
for (let n = 0; n < N; n++) {
  let rec = [null, ...input[1 + n].split(" ").map(Number)]; // record of student
  table.push(rec);
}

const cnts = new Array(N + 1).fill(0);
for (let s = 1; s < N + 1; s++) {
  const classmates = new Set();
  for (let g = 1; g < 6; g++) {
    for (let i = 1; i < N + 1; i++) {
      if (i === s) continue;

      if (table[i][g] === table[s][g]) classmates.add(i);
    }
  }

  cnts[s] += classmates.size;
}

let ans = 1; // init for case if all values are equal
let max = 0;
for (let s = 1; s < N + 1; s++) {
  if (cnts[s] > max) {
    max = cnts[s];
    ans = s;
  }
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
