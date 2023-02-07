/*
알고리즘 수업 - 깊이 우선 탐색 1
boj.kr/24479
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M, R] = input[0].split(" ").map(Number); // [정점의 수, 간선의 수, 시작 정점]
const list = Array.from({ length: N + 1 }, () => []);
for (let m = 0; m < M; m++) {
  let [u, v] = input[1 + m].split(" ").map(Number);
  list[u].push(v);
  list[v].push(u);
}

let ans;
let cnt = 0;
list.forEach((nodes) => {
  nodes.sort((a, b) => a - b);
});
const visited = new Array(N + 1).fill(0);
const dfs = (V, E, R) => {
  // V : 정점 집합, E : 간선 집합, R : 시작 정점
  cnt++;
  visited[R] = cnt; // 시작 정점 R을 방문 했다고 표시한다.
  for (let x of E[R]) {
    // E(R) : 정점 R의 인접 정점 집합.(정점 번호를 오름차순으로 방문한다)
    if (visited[x] === 0) dfs(V, E, x);
  }
};

dfs(list, list, R);

ans = visited.filter((v, i) => {
  return i !== 0;
});
console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
