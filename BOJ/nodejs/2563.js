/*
색종이
boj.kr/2563
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

const canvas = Array.from(Array(100), () => Array(100).fill(0));
let ans = 0;
for (let n = 0; n < N; n++) {
  let botLeft = input[1 + n].split(" ").map(Number);
  let topRight = [botLeft[0] + 10, botLeft[1] + 10];
  for (let x = botLeft[0]; x < topRight[0]; x++) {
    for (let y = botLeft[1]; y < topRight[1]; y++) {
      if (canvas[x][y] === 0) {
        ans++;
        canvas[x][y] = 1;
      }
    }
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
