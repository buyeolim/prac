/*
수 정렬하기
boj.kr/2750
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const nums = new Array();
for (let n = 0; n < N; n++) {
  nums.push(1 * input[1 + n]);
}

// 삽입 정렬
for (let i = 0; i < N; i++) {
  let tmp = nums[i];
  let j;
  for (j = i - 1; j >= 0; j--) {
    if (nums[j] > tmp) nums[j + 1] = nums[j];
    else break;
  }
  nums[j + 1] = tmp;
}

console.log(nums.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
