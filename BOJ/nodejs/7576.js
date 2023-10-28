/*
토마토
https://boj.kr/7576
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [M, N] = input[0].split(" ").map(Number);

let total = 0; // 안 익은 토마토 수
const mat = Array.from({ length: N }, () => new Array(M));
const queue = new Array(); // BFS 작업 시, 시작 위치를 담기 위한 큐
for (let n = 0; n < N; n++) {
  const row = input[1 + n].split(" ");
  for (let m = 0; m < M; m++) {
    mat[n][m] = 1 * row[m];
    mat[n][m] === 0 && total++;
    mat[n][m] > 0 && queue.push([n, m]);
  }
}

// BFS
let qIdx = 0;
let cnt = 0;
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
while (queue.length > qIdx) {
  let [r, c] = queue[qIdx++];
  cnt = mat[r][c];

  for (let i = 0; i < 4; i++) {
    if (r + dr[i] >= 0 && r + dr[i] < N && c + dc[i] >= 0 && c + dc[i] < M) {
      if (mat[r + dr[i]][c + dc[i]] === 0) {
        queue.push([r + dr[i], c + dc[i]]);
        total--;
        mat[r + dr[i]][c + dc[i]] = cnt + 1;
      }
    }
  }
}
// 0 확인
const ans = total > 0 ? -1 : cnt - 1;

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
