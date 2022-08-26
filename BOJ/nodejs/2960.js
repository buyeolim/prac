/*
에라토스테네스의 체
boj.kr/2960
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const nums = Array.from({ length: N + 1 }, () => true);
let ans = [];
nums[0] = nums[1] = false;
for (let n = 2; n < N + 1; n++) {
  if (nums[n] === false) continue;
  for (let d = n; d < N + 1; d += n) {
    if (nums[d] === true) ans.push(d);
    if (ans.length === K) break;
    if (d === n) continue;

    nums[d] = false;
  }

  if (ans.length === K) break;
}

console.log(ans[K - 1]);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
