/*
수들의 합 2
boj.kr/2003
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

let ans = 0,
  sum = 0,
  lt = 0;
for (let rt = 0; rt < N; rt++) {
  sum += A[rt];
  if (sum === M) ans++;

  while (sum >= M) {
    sum -= A[lt++];
    if (sum === M) {
      ans++;
    }
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
