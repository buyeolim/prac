/*
경로 찾기
https://boj.kr/11403
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = 1 * input[0];
const adj = new Array(N);
for (let n = 0; n < N; n++) {
  adj[n] = input[1 + n].split(" ").map(Number);
}

const res = Array.from({ length: N }, () => new Array(N).fill(0)); // 경로 존재 결과
let visited; // 방문
function bfs(s, res) {
  const queue = new Array(1).fill(s);
  while (queue.length > 0) {
    let u = queue.shift();
    for (let v = 0; v < N; v++) {
      if (adj[u][v] && !visited[v]) {
        queue.push(v);
        visited[v] = 1;
        res[s][v] = 1;
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  visited = new Array(N).fill(0);
  bfs(i, res);
}
const ans = res.map((row) => row.join(" ")).join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
