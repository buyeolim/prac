/*
나이트의 이동
boj.kr/7562
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = 0;
const T = 1 * input[line++];

const dr = [-2, -1, 1, 2, 2, 1, -1, -2];
const dc = [1, 2, 2, 1, -1, -2, -2, -1];
let ans = [];
for (let t = 0; t < T; t++) {
  const l = 1 * input[line++];
  const s = input[line++].split(" ").map(Number);
  const e = input[line++].split(" ").map(Number);

  const mat = Array.from(Array(l), () => Array(l).fill(0));
  const queue = [];

  // bfs
  mat[s[0]][s[1]] = 1;
  queue.push([s, 0]);
  while (queue.length > 0) {
    const [pos, cnt] = queue.shift();
    if (pos[0] === e[0] && pos[1] === e[1]) {
      ans.push(cnt);
      break;
    }

    for (let i = 0; i < 8; i++) {
      let [nr, nc] = [pos[0] + dr[i], pos[1] + dc[i]];
      if (nr >= 0 && nr < l && nc >= 0 && nc < l) {
        if (mat[nr][nc] === 0) {
          mat[nr][nc] = 1;
          queue.push([[nr, nc], cnt + 1]);
        }
      }
    }
  }
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
