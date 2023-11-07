/*
연결 요소의 개수
https://boj.kr/11724
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number); // [정점 수, 간선 수]

const adj = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0)); // 인접 행렬
for (let m = 0; m < M; m++) {
  const [u, v] = input[1 + m].split(" ").map(Number);
  adj[u][v] = 1;
  adj[v][u] = 1;
}

function bfs(start) {
  const queue = new Array();
  queue.push(start);
  visited[start] = 1;
  while (queue.length > 0) {
    const u = queue.shift();

    for (let v = 1; v < N + 1; v++) {
      if (!adj[u][v] || visited[v]) continue;

      queue.push(v);
      visited[v] = 1;
    }
  }

  return;
}
const visited = new Array(N + 1).fill(0); // 방문 정점
let ans = 0;
for (let v = 1; v < N + 1; v++) {
  if (visited[v]) continue;

  ans++;
  bfs(v);
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
