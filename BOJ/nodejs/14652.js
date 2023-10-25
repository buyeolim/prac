/*
나는 행복합니다~
https://boj.kr/14652
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, M, K] = input[0].split(" ").map(Number);

const res = [-1, -1];
let cnt = 0;
for (let n = 0; n < N; n++) {
  for (let m = 0; m < M; m++) {
    if (cnt === K) {
      [res[0], res[1]] = [n, m];
      break;
    }
    cnt++;
  }
  if (res[0] >= 0) break;
}
const ans = res.join(" ");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
