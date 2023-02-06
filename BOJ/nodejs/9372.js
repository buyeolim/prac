/*
상근이의 여행
boj.kr/9372
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ln = 0;
const T = 1 * input[ln++];
for (let t = 0; t < T; t++) {
  const [N, M] = input[ln++].split(" ").map(Number); // [국가의 수, 비행기의 종류]
  const mat = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
  for (let m = 0; m < M; m++) {
    let [a, b] = input[ln++].split(" ").map(Number);
    mat[a][b] = mat[b][a] = 1;
  }

  let ans;
  let visited = new Array(N + 1).fill(0);
  const dfs = (v, cnt) => {
    visited[v] = 1;

    for (let x = 1; x < N + 1; x++) {
      if (mat[v][x] === 0) continue;
      if (visited[x] === 0) {
        cnt = dfs(x, cnt + 1);
      }
    }

    return cnt;
  };

  ans = dfs(1, 0);
  console.log(ans);
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
