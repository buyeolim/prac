/*
색종이 만들기
boj.kr/2630
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const mat = [];
for (let n = 0; n < N; n++) {
  let row = input[1 + n].split(" ").map(Number);
  mat.push(row);
}

function dq(s, w) {
  // I, II, III, IV 시작 위치
  const dr = [0, 0, w / 2, w / 2];
  const dc = [0, w / 2, 0, w / 2];
  const [sr, sc] = s;
  for (let i = 0; i < 4; i++) {
    let sum = 0;
    for (let r = sr + dr[i]; r < sr + dr[i] + w / 2; r++) {
      for (let c = sc + dc[i]; c < sc + dc[i] + w / 2; c++) {
        sum += mat[r][c];
      }
    }

    if (sum === 0) {
      ans[0]++;
    } else if (sum === w ** 2 / 4) {
      ans[1]++;
    } else {
      dq([sr + dr[i], sc + dc[i]], w / 2);
    }
  }
}

const ans = [0, 0]; // 하양(0), 파랑(1)
let sum = 0;
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    sum += mat[r][c];
  }
}
if (sum === 0) {
  ans[0]++;
} else if (sum === N ** 2) {
  ans[1]++;
} else {
  dq([0, 0], N);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
