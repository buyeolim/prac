/*
N과 M (5)
boj.kr/15654
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

nums.sort((a, b) => a - b);
const check = new Array(N).fill(0);

let ans = "";
const dfs = (cnt, p) => {
  if (cnt === M) {
    ans += p.join(" ") + "\n";

    return;
  }

  for (let i = 0; i < N; i++) {
    if (check[i] === 0) {
      check[i] = 1;
      p.push(nums[i]);
      dfs(cnt + 1, p);
      check[i] = 0;
      p.pop();
    }
  }
};

dfs(0, []);
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
