/*
부분수열의 합
boj.kr/1182
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

const check = new Array(N).fill(0);
const subset = [];
let ans = 0;
const dfs = (start, sum) => {
  if (start > N) {
    return;
  }

  if (subset.length > 0 && sum === S) ans++;

  for (let i = start; i < N; i++) {
    if (check[i] === 0) {
      check[i] = 1;
      subset.push(nums[i]);
      dfs(i + 1, sum + nums[i]);
      check[i] = 0;
      subset.pop(nums[i]);
    }
  }
};

dfs(0, 0);
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
