/*
단지번호붙이기
boj.kr/2667
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const mat = Array.from(Array(N), (v, i) =>
  input[1 + i].trim().split("").map(Number)
);

const dfs = (r, c) => {
  for (let i = 0; i < 4; i++) {
    let nr = r + dr[i];
    let nc = c + dc[i];
    if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
      if (mat[nr][nc] === 1 && visit[nr][nc] === 0) {
        cnt++;
        visit[nr][nc] = 1;
        dfs(nr, nc);
      }
    }
  }
};

const visit = Array.from(Array(N), () => Array(N).fill(0));
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
const cnts = [];
let num = 0; // 단지수
let cnt; // 집수
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (mat[r][c] === 1 && visit[r][c] === 0) {
      num++;
      cnt = 1;
      visit[r][c] = 1;
      dfs(r, c);
      cnts.push(cnt);
    }
  }
}

cnts.sort((a, b) => a - b);
const ans = num.toString() + "\n" + cnts.join("\n");
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
