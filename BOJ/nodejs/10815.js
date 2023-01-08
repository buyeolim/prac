/*
숫자 카드
boj.kr/10815
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const nums = input[1].split(" ").map(Number);
const M = 1 * input[2];
const myNums = input[3].split(" ").map(Number);

nums.sort((a, b) => a - b);
let ans = [];
for (let target of myNums) {
  let lt = 0;
  let rt = N - 1;
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (nums[mid] === target) {
      ans.push(1);
      break;
    }

    if (nums[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }

  if (lt > rt) ans.push(0);
}
console.log(ans.join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
