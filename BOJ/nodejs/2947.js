/*
나무 조각
boj.kr/2947
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const nums = input[0].split(" ").map(Number);

while (true) {
  let flag = true;
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 !== nums[i]) {
      flag = false;
      break;
    }
  }
  if (flag === true) break;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      console.log(nums.join(" "));
    }
  }
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
