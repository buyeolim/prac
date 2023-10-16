/*
체스판 다시 칠하기
https://boj.kr/1018
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const mat = Array.from({ length: N }, () => new Array(M));
for (let n = 0; n < N; n++) {
  mat[n] = input[1 + n].split("").map((ele) => (ele === "W" ? true : false));
}

function repaint(n, m) {
  let counts = [0, 0];

  for (let i = 0; i < 2; i++) {
    let isWhite = i % 2 === 0;
    for (let r = n; r < n + 8; r++) {
      for (let c = m; c < m + 8; c++) {
        mat[r][c] !== isWhite && counts[i]++;

        isWhite = !isWhite;
      }
      isWhite = !isWhite;
    }
  }

  return Math.min(...counts);
}

let ans = Number.MAX_SAFE_INTEGER;
for (let n = 0; n <= N - 8; n++) {
  for (let m = 0; m <= M - 8; m++) {
    ans = Math.min(ans, repaint(n, m));
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
