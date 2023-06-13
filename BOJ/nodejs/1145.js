/*
적어도 대부분의 배수
boj.kr/1145
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const nums = input[0].split(" ").map(Number);

let ans;
nums.sort((a, b) => a - b);
for (let n = nums[0]; n < nums[2] * nums[3] * nums[4]; n++) {
  let cnt = 0;
  n % nums[0] === 0 && cnt++;
  n % nums[1] === 0 && cnt++;
  n % nums[2] === 0 && cnt++;
  n % nums[3] === 0 && cnt++;
  n % nums[4] === 0 && cnt++;

  if (cnt >= 3) {
    ans = n;
    break;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
