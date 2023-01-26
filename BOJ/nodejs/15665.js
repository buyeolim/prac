/*
N과 M (11)
boj.kr/15665
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);

nums.sort((a, b) => a - b);
nums = [...new Set(nums)];
const S = [];
const dfs = (s) => {
  if (s.length === M) {
    S.push([...s]);

    return;
  }

  for (let i = 0; i < nums.length; i++) {
    s.push(nums[i]);
    dfs(s);
    s.pop();
  }
};

dfs([]);

let ans = "";
for (let s of S) {
  ans += s.join(" ") + "\n";
}
console.log(ans);

const end = new Date().getTime();

console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
