/*
유기농 배추
boj.kr/1012
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = 0;
const T = 1 * input[line++];
for (let t = 0; t < T; t++) {
  let ans = 0;
  let [M, N, K] = input[line++].split(" ").map(Number); // 가로, 세로, 심은 위치수
  let mat = new Array();
  for (let n = 0; n < N; n++) {
    mat.push(Array.from({ length: M }, () => 0));
  }

  // 배추 위치 입력
  for (let k = 0; k < K; k++) {
    let [X, Y] = input[line++].split(" ").map(Number);
    mat[Y][X] = 1;
  }

  // 배추 위치 찾기
  let queue = new Array();
  let dy = [-1, 0, 1, 0]; // 세로 이동
  let dx = [0, 1, 0, -1]; // 가로 이동
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      // BFS
      if (mat[y][x] === 1) {
        mat[y][x] = 0;
        queue.push([y, x]);
        while (queue.length) {
          let [y, x] = queue.shift();
          for (let i = 0; i < 4; i++) {
            let ny = y + dy[i];
            let nx = x + dx[i];
            if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
              if (mat[ny][nx] === 1) {
                mat[ny][nx] = 0;
                queue.push([ny, nx]);
              }
            }
          }
        }
        ans++;
      }
    }
  }
  console.log(ans);
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
