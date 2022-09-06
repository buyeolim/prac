/*
마인크래프트
boj.kr/18111
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M, B] = input[0].split(" ").map(Number);
const G = [];
const H = [];
for (let i = 0; i < N; i++) {
  G.push(
    input[1 + i].split(" ").map((e) => {
      let h = 1 * e;
      H.includes(h) ? "" : H.push(h);

      return h;
    })
  );
}

const ans = [-1, -1];
let min = Number.MAX_SAFE_INTEGER;
for (let h = 256; h >= 0; h--) {
  let currB = B;
  let t = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let diff = h - G[i][j];
      if (diff < 0) {
        // 작업 1
        currB += -1 * diff;
        t += -2 * diff;
      } else if (diff > 0) {
        // 작업 2
        currB -= diff;
        t += diff;
      } else {
        continue;
      }
    }
  }

  if (currB >= 0) {
    if (t < min) {
      ans[0] = t;
      ans[1] = h;
      min = t;
    }
  }
}

console.log(...ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
