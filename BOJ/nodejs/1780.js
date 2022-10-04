/*
종이의 개수
boj.kr/1780
 */
const start = new Date().getTime();

const { count } = require("console");
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const mat = [];
for (let n = 0; n < N; n++) {
  mat.push(input[1 + n].split(" ").map(Number));
}

let ans = [0, 0, 0];
const dq = (pos, len) => {
  for (let r = pos[0]; r < pos[0] + len; r += len / 3) {
    for (let c = pos[1]; c < pos[1] + len; c += len / 3) {
      if (isPaper([r, c], len / 3)) {
        countPaper(mat[r][c]);
      } else {
        dq([r, c], len / 3);
      }
    }
  }
};

const isPaper = (pos, len) => {
  let type = mat[pos[0]][pos[1]];
  for (let r = pos[0]; r < pos[0] + len; r++) {
    for (let c = pos[1]; c < pos[1] + len; c++) {
      if (mat[r][c] !== type) return false;
    }
  }

  return true;
};

const countPaper = (type) => {
  switch (type) {
    case -1:
      ans[0]++;
      break;
    case 0:
      ans[1]++;
      break;
    case 1:
      ans[2]++;
      break;
  }
};

isPaper([0, 0], N) ? countPaper(mat[0][0]) : dq([0, 0], N);

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
