/*
구간 합 구하기 4
https://boj.kr/11659
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number); // [수의 개수, 합을 구해야 하는 횟수]
const nums = input[1].split(" ").map(Number);
const ranges = input.slice(2).map((ele) => ele.split(" ").map(Number));

const DP = new Array(N + 1).fill(0);
let acc = 0;
for (let i = 0; i < N; i++) {
  acc += nums[i];
  DP[i + 1] = acc;
}

const res = new Array(M);
for (let m = 0; m < M; m++) {
  const [l, r] = ranges[m];
  res[m] = DP[r] - DP[l - 1];
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
