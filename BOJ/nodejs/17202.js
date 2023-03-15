/*
핸드폰 번호 궁합
boj.kr/17202
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const A = input[0];
const B = input[1];

let ans;
const nums = new Array(16).fill(null);
for (let i = 0; i < 16; i += 2) {
  let j = Math.floor(i / 2);
  nums[i] = 1 * A[j];
  nums[i + 1] = 1 * B[j];
}

while (nums.length > 2) {
  let j = 0;
  for (let i = 0; i < nums.length - 1; i++, j++) {
    nums[j] = (nums[i] + nums[i + 1]) % 10;
  }
  nums.pop();
}
ans = nums.join("");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
