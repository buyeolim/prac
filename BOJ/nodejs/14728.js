/*
벼락치기
boj.kr/14728
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, T] = input[0].split(" ").map(Number);
const K = new Array(N);
const S = new Array(N);
for (let n = 0; n < N; n++) {
  let [k, s] = input[1 + n].split(" ").map(Number);
  [K[n], S[n]] = [k, s];
}

let ans;
const dp = new Array(T + 1).fill(0); // 공부시간 t(0 ~ T)에 얻을 수 있는 최대 점수
for (let n = 0; n < N; n++) {
  let [studyTime, score] = [K[n], S[n]];
  for (let t = T; t >= 0; t--) {
    if (t - studyTime < 0) break;

    dp[t] = Math.max(dp[t], dp[t - studyTime] + score);
  }
}
ans = dp[T];

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
