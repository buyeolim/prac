/*
한수
https://www.acmicpc.net/problem/1065
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = input[0];

let ans = 0;
if (N.length < 3) {
  ans = 1 * N;
} else {
  ans = 99;
  for (let n = 100; n < 1 * N + 1; n++) {
    let nStr = n.toString();
    let nums = nStr.split("").map((ele) => 1 * ele);

    let flag = true; // 등차수열이면 true
    let prev_diff = nums[1] - nums[0];
    for (let i = 1; i < nums.length; i++) {
      let curr_diff = nums[i] - nums[i - 1];
      if (curr_diff !== prev_diff) {
        flag = false;
        break;
      }

      prev_diff = curr_diff;
    }

    if (flag) ans++;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
