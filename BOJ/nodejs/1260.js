/*
DFS와 BFS
boj.kr/1260
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M, V] = input[0].split(" ").map(Number); // [정점, 간선의 수, 시작 정점]
const mat = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0)); // 인접 행렬
for (let m = 0; m < M; m++) {
  let [u, v] = input[1 + m].split(" ").map(Number);
  mat[u][v] = mat[v][u] = 1;
}

let ans;
const dfs = (s) => {
  ans += `${s} `;
  visited[s] = 1;
  for (let x = 1; x < N + 1; x++) {
    if (x === s || mat[s][x] === 0) continue;
    if (visited[x] === 0) dfs(x);
  }
};
const bfs = (r) => {
  const queue = new Array();

  ans += `${r} `;
  visited[r] = 1;
  queue.push(r);
  while (queue.length > 0) {
    let s = queue.shift();

    for (let x = 1; x < N + 1; x++) {
      if (x === s || mat[s][x] === 0) continue;
      if (visited[x] === 0) {
        ans += `${x} `;
        visited[x] = 1;
        queue.push(x);
      }
    }
  }
};
let visited;

visited = new Array(N + 1).fill(0);
ans = "";
dfs(V);
visited = new Array(N + 1).fill(0);
ans += "\n";
bfs(V);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
