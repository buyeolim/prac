/*
사분면
boj.kr/9610
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0];
const ans = [0, 0, 0, 0, 0]; // [axis, Q1, Q2, Q3, Q4]
for (let cnt = 0; cnt < n; cnt++) {
  const [x, y] = input[1 + cnt].split(" ").map(Number);

  if (x === 0 || y === 0) ans[0]++;
  else if (x > 0 && y > 0) ans[1]++;
  else if (x < 0 && y > 0) ans[2]++;
  else if (x < 0 && y < 0) ans[3]++;
  else ans[4]++;
}

console.log(
  `Q1: ${ans[1]}\nQ2: ${ans[2]}\nQ3: ${ans[3]}\nQ4: ${ans[4]}\nAXIS: ${ans[0]}`
);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
