/*
반지
boj.kr/5555
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const target = input[0];
const N = 1 * input[1];
let ans = 0;
for (let i = 0; i < N; i++) {
  let ring = input[2 + i];

  let cnt = 0;
  while (cnt < ring.length) {
    if (ring.includes(target)) {
      ans++;
      break;
    }

    ring = ring.substring(1, ring.length) + ring.substring(0, 1);
    cnt++;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
