/*
눈덩이 굴리기
boj.kr/21735
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const a = [0, ...input[1].split(" ").map(Number)];

let ans = 0;
const dfs = (i, sec, sum) => {
  ans = Math.max(ans, sum);

  if (i > N || sec === M) {
    return;
  }

  // case 1
  if (i + 1 <= N) {
    dfs(i + 1, sec + 1, sum + a[i + 1]);
  }
  // case 2
  if (i + 2 <= N) {
    dfs(i + 2, sec + 1, Math.floor(sum / 2) + a[i + 2]);
  }
};

dfs(0, 0, 1);
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
