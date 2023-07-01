/*
공약수
boj.kr/5618
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0];
const nums = input[1].split(" ").map(Number);

const ans = [];
nums.sort((a, b) => a - b);
const getGCD = (a, b) => {
  if (b === 0) return a;

  return getGCD(b, a % b);
};

const gcd =
  n < 3 ? getGCD(nums[0], nums[1]) : getGCD(nums[0], getGCD(nums[1], nums[2]));
for (let i = 1; i < gcd + 1; i++) {
  gcd % i === 0 && ans.push(i);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
