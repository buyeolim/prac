/*
와글와글 숭고한
boj.kr/17388
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const nums = input[0].split(" ").map(Number);

const univs = ["Soongsil", "Korea", "Hanyang"];
let ans = "";
let min = 100;
if (nums.reduce((acc, cur) => acc + cur, 0) >= 100) {
  ans = "OK";
} else {
  for (let i = 0; i < 3; i++) {
    if (nums[i] < min) {
      ans = univs[i];
      min = nums[i];
    }
  }
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
