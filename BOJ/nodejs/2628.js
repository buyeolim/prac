/*
종이자르기
boj.kr/2628
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [width, height] = input[0].split(" ").map(Number);
const N = 1 * input[1];
const [row, column] = [[0], [0]];
for (let n = 0; n < N; n++) {
  const [type, val] = input[2 + n].split(" ").map(Number);
  type === 0 ? row.push(val) : column.push(val);
}
row.push(height);
column.push(width);

row.sort((a, b) => a - b);
column.sort((a, b) => a - b);

let ans = 0;
for (let r = 1; r < row.length; r++) {
  let h = row[r] - row[r - 1];
  for (let c = 1; c < column.length; c++) {
    let w = column[c] - column[c - 1];
    ans = Math.max(w * h, ans);
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
