/*
랜선 자르기
https://boj.kr/1436
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [K, N] = input[0].split(" ").map(Number);
const cables = new Array(K);
for (let k = 0; k < K; k++) {
  cables[k] = 1 * input[1 + k];
}

let ans = 0;
let [left, right] = [1, Math.max(...cables)];
let mid, cnt;
while (left <= right) {
  mid = Math.floor((left + right) / 2);
  cnt = cables
    .map((cable) => Math.floor(cable / mid))
    .reduce((acc, cur) => acc + cur, 0);
  if (cnt >= N) {
    ans = Math.max(ans, mid);
  }

  cnt >= N ? (left = mid + 1) : (right = mid - 1);
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
