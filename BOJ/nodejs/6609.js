/*
모기곱셈
boj.kr/6609
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = input.length;
const ans = new Array(T).fill(0);
for (let t = 0; t < T; t++) {
  // M: 모기수
  // P: 번데기수
  // L: 유충수
  // E: 한 모기가 낳는 알의 수
  // R: 살아남은 유충 비율(R번째 유충만 생존)
  // S: 살아남은 번데기 비율(S번째 번데기만 생존)
  // N: 모기 수를 구하려는 시점(N주 후)
  let [M, P, L, E, R, S, N] = input[t].split(" ");
  for (let n = 0; n < N; n++) {
    let [m, p, l] = [Math.floor(P / S), Math.floor(L / R), M * E]; // 생존한 모기, 번데기, 유충수
    [M, P, L] = [m, p, l];
  }
  ans[t] = M;
}
console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
