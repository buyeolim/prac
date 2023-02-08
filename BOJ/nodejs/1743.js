/*
음식물 피하기
boj.kr/1743
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M, K] = input[0].split(" ").map(Number); // [세로, 가로, 쓰레기 개수]
const mat = Array.from({ length: N + 1 }, () => Array(M + 1).fill("."));
for (let k = 0; k < K; k++) {
  let [r, c] = input[1 + k].split(" ").map(Number);
  mat[r][c] = "#";
}

let ans = 0;
let size;
const visited = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
const dfs = (pos) => {
  let [r, c] = [pos[0], pos[1]];
  visited[r][c] = 1;
  size++;
  ans = Math.max(ans, size);

  for (let i = 0; i < 4; i++) {
    let [nr, nc] = [pos[0] + dr[i], pos[1] + dc[i]];
    if (nr >= 1 && nr <= N && nc >= 1 && nc <= M)
      if (mat[nr][nc] === "#" && visited[nr][nc] === 0) dfs([nr, nc]);
  }
};

for (let r = 1; r < N + 1; r++) {
  for (let c = 1; c < M + 1; c++) {
    if (mat[r][c] === "#" && visited[r][c] === 0) {
      size = 0;
      dfs([r, c]);
    }
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
