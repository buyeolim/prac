/*
세 수
https://www.acmicpc.net/problem/2985
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

nums = input[0].split(" ").map((ele) => 1 * ele);

ans = "";
for (let i = 0; i < 2; i++) {
  if (i === 0) {
    nums[0] === nums[1] + nums[2] ? (ans = nums[1] + "+" + nums[2]) : "";
    nums[0] === nums[1] - nums[2] ? (ans = nums[1] + "-" + nums[2]) : "";
    nums[0] === nums[1] * nums[2] ? (ans = nums[1] + "*" + nums[2]) : "";
    nums[0] === Math.floor(nums[1] / nums[2])
      ? (ans = nums[1] + "/" + nums[2])
      : "";

    if (ans.length > 0) {
      ans = nums[0] + "=" + ans;
      break;
    }
  } else {
    nums[0] + nums[1] === nums[2] ? (ans = nums[0] + "+" + nums[1]) : "";
    nums[0] - nums[1] === nums[2] ? (ans = nums[0] + "-" + nums[1]) : "";
    nums[0] * nums[1] === nums[2] ? (ans = nums[0] + "*" + nums[1]) : "";
    Math.floor(nums[0] / nums[1]) === nums[2]
      ? (ans = nums[0] + "/" + nums[1])
      : "";
  }

  if (ans.length > 0) {
    ans = ans + "=" + nums[2];
    break;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
