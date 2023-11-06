/*
파도반 수열
https://boj.kr/9461
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const T = 1 * input[0];

// 수열 계산
const P = new Array(101).fill(0);
P[1] = P[2] = 1;
for (let n = 3; n < 101; n++) {
  P[n] = P[n - 2] + P[n - 3];
}

const res = new Array(T);
for (let t = 0; t < T; t++) {
  const N = 1 * input[1 + t];
  res[t] = P[N];
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
