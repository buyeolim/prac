/*
만취한 상범
boj.kr/6359
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];

let rooms = Array.from({ length: 100 + 1 });
for (let t = 0; t < T; t++) {
  const n = 1 * input[1 + t];

  rooms = rooms.map((e) => false);
  for (let r = 1; r <= n; r++) {
    for (let i = 1; r * i <= n; i++) {
      rooms[r * i] = !rooms[r * i];
    }
  }

  const ans = rooms.filter((e) => e === true).length;
  console.log(ans);
}

// 규칙 이용
// const T = 1 * input[0];
// for (let t = 0; t < T; t++) {
//   const n = 1 * input[1 + t];

//   const ans = Math.floor(n ** (1 / 2));
//   console.log(ans);
// }

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
