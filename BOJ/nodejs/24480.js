/*
알고리즘 수업 - 깊이 우선 탐색 2
boj.kr/24480
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M, R] = input[0].split(" ").map(Number);

const adj = Array.from({ length: N + 1 }, () => []); // 인접 리스트
const visited = new Array(N + 1).fill(0); // 방문 확인
for (let m = 0; m < M; m++) {
  const [u, v] = input[1 + m].split(" ").map(Number);
  adj[u].push(v);
  adj[v].push(u);
}

// 인접 리스트, 내림차순 정렬
for (let n = 1; n < N + 1; n++) {
  adj[n].sort((a, b) => b - a);
}

let cnt = 1; // 방문 순서

function dfs(V, E, R) {
  // V : 정점 집합, E : 간선 집합, R : 시작 정점
  visited[R] = cnt++; // 시작 정점 R을 방문 했다고 표시한다.
  for (let x of E[R]) // E[R] : 정점 R의 인접 정점 집합.(정점 번호를 내림차순으로 방문한다)
    if (visited[x] === 0) dfs(V, E, x);
}

dfs(adj, adj, R);

let ans = new Array(N);
for (let n = 0; n < N; n++) {
  ans[n] = visited[n + 1];
}
console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
