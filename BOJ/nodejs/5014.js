/*
스타트링크
boj.kr/5014
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [F, S, G, U, D] = input[0].split(" ").map(Number);

let ans = Number.MAX_SAFE_INTEGER;
const df = [U, -D];
const visited = new Array(F + 1).fill(0);
const bfs = (floor, cnt) => {
  const queue = [[floor, cnt]];
  while (queue.length > 0) {
    let [curr, cnt] = queue.shift();
    if (curr === G) {
      return cnt;
    }

    for (let i = 0; i < 2; i++) {
      let next = curr + df[i];
      if (next > 0 && next < F + 1) {
        if (visited[next] === 0) {
          visited[next] = 1;
          queue.push([next, cnt + 1]);
        }
      }
    }
  }

  return "use the stairs";
};

ans = bfs(S, 0);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
