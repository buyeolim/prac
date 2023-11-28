/*
출제비 재분배
https://boj.kr/26145
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const S = input[1].split(" ").map(Number);
const T = Array.from({ length: N }, () => new Array(N + M).fill(0));
for (let i = 0; i < N; i++) {
  T[i] = input[2 + i].split(" ").map(Number);
}

const res = new Array(N + M).fill(0);
for (let i = 0; i < N; i++) {
  res[i] += S[i];
  for (let j = 0; j < N + M; j++) {
    res[i] -= T[i][j];
    res[j] += T[i][j];
  }
}
const ans = res.join(" ");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
