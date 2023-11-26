/*
케빈 베이컨의 6단계 법칙
https://boj.kr/1389
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number); // 유저수, 친구관계의 수

const adj = Array.from({ length: 1 }, () => new Array(N + 1).fill(0));
for (let n = 1; n < N + 1; n++) {
  const row = [0, ...new Array(N).fill(Number.MAX_SAFE_INTEGER)];
  row[n] = 0;
  adj.push(row);
}
for (let m = 0; m < M; m++) {
  const [a, b] = input[1 + m].split(" ").map(Number);
  adj[a][b] = 1;
  adj[b][a] = 1;
}

// i -> k -> j
for (let k = 1; k < N + 1; k++) {
  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      adj[i][k] !== 0 &&
        adj[k][j] !== 0 &&
        (adj[i][j] = Math.min(adj[i][k] + adj[k][j], adj[i][j]));
    }
  }
}
const res = Array.from({ length: N + 1 }, (v, i) =>
  adj[i].reduce((acc, cur) => acc + cur, 0)
);
const ans = res.indexOf(Math.min(...res.slice(1)));

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
