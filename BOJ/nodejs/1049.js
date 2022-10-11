/*
기타줄
boj.kr/1049
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const min = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
for (let m = 0; m < M; m++) {
  const [p, ea] = input[1 + m].split(" ").map(Number);

  min[0] = Math.min(p, min[0]);
  min[1] = Math.min(ea, min[1]);
}

let ans = 0;
if (min[0] / 6 < min[1]) {
  ans = Math.min(
    Math.floor(N / 6) * min[0] + (N % 6) * min[1],
    (Math.floor(N / 6) + 1) * min[0]
  );
} else {
  ans = N * min[1];
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
