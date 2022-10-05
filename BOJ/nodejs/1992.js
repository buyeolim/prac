/*
쿼드트리
boj.kr/1992
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const mat = [];
for (let n = 0; n < N; n++) {
  mat.push(input[1 + n].split("").map(Number));
}

let ans = "";
function dc(pos, len) {
  ans += "(";
  for (let r = pos[0]; r < pos[0] + len; r += len / 2) {
    for (let c = pos[1]; c < pos[1] + len; c += len / 2) {
      if (isComp([r, c], len / 2)) {
        ans += mat[r][c].toString();
      } else {
        dq([r, c], len / 2);
      }
    }
  }
  ans += ")";
}

function isComp(pos, len) {
  const type = mat[pos[0]][pos[1]];
  for (let r = pos[0]; r < pos[0] + len; r++) {
    for (let c = pos[1]; c < pos[1] + len; c++) {
      if (mat[r][c] !== type) return false;
    }
  }

  return true;
}

isComp([0, 0], N) ? (ans += mat[0][0]) : dq([0, 0], N);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
