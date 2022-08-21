/*
미로 탐색
boj.kr/2178
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const mat = Array.from(Array(N), (v, i) =>
  input[1 + i].trim().split("").map(Number)
);

const bfs = (ans, r, c) => {
  const queue = [];
  queue.push([ans, r, c]);
  while (queue.length) {
    [ans, r, c] = queue.shift();
    if (r === N - 1 && c === M - 1) {
      break;
    }

    for (let i = 0; i < 4; i++) {
      let nr = r + dr[i];
      let nc = c + dc[i];
      if (nr >= 0 && nr < N && nc >= 0 && nc < M) {
        if (mat[nr][nc] === 1) {
          queue.push([ans + 1, nr, nc]);
          mat[nr][nc] = 2;
        }
      }
    }
  }

  return ans;
};

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
mat[0][0] = 2;
let ans = bfs(1, 0, 0);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
