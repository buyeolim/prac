/*
파티가 끝나고 난 뒤
boj.kr/2845
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [L, P] = input[0].split(" ");
const nums = input[1].split(" ");

const ans = new Array(5);
for (let i = 0; i < 5; i++) {
  ans[i] = nums[i] - L * P;
}

console.log(ans.join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
