/*
대표 자연수
boj.kr/2548
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const nums = input[1].split(" ");

let arr = new Array();
let min = Number.MAX_SAFE_INTEGER;
for (let n = Math.min(...nums); n < Math.max(...nums) + 1; n++) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += Math.abs(n - nums[i]);
  }

  if (sum <= min) {
    min = sum;
    arr.push([sum, n]);
  }
}
arr.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  else return a[0] - b[0];
});
ans = arr[0][1];

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
