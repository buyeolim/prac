/*
Z
boj.kr/1074
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, r, c] = input[0].split(" ").map(Number);

let ans = 0;
function dc(len, pos) {
  if (len === 1) {
    return;
  }

  let half = len / 2;
  if (pos[0] / half < 1 && pos[1] / half < 1) {
    // 좌상
    ans += half ** 2 * 0;
  } else if (pos[0] / half < 1 && pos[1] / half >= 1) {
    // 우상
    ans += half ** 2 * 1;
  } else if (pos[0] / half >= 1 && pos[1] / half < 1) {
    // 좌하
    ans += half ** 2 * 2;
  } else if (pos[0] / half >= 1 && pos[1] / half >= 1) {
    // 우하
    ans += half ** 2 * 3;
  }

  dc(half, [pos[0] % half, pos[1] % half]);

  return;
}

dc(2 ** N, [r, c]);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
