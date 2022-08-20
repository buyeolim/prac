/*
섬의 개수
boj.kr/4963
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = 0;
while (true) {
  let [w, h] = input[line++].split(" ").map(Number);
  if (w === 0 && h === 0) break;

  // 섬, 바다 입력
  const mat = [];
  for (let r = 0; r < h; r++) {
    mat.push(input[line++].split(" ").map(Number));
  }

  let dr = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dc = [0, 1, 1, 1, 0, -1, -1, -1];
  const dfs = (r, c) => {
    mat[r][c] = 2;
    for (let i = 0; i < 8; i++) {
      let nr = r + dr[i];
      let nc = c + dc[i];
      if (nr >= 0 && nr < h && nc >= 0 && nc < w) {
        if (mat[nr][nc] === 1) dfs(nr, nc);
      }
    }

    return;
  };

  let ans = 0;
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      if (mat[r][c] === 1) {
        // 섬이면 DFS 시작
        dfs(r, c);
        ans++;
      }
    }
  }

  console.log(ans);
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
