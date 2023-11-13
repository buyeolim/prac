/*
시각
https://boj.kr/18312
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

let ans = 0;
for (let h = 0; h < N + 1; h++) {
  const hh = (h + "").padStart(2, "0");
  for (let m = 0; m < 60; m++) {
    const mm = (m + "").padStart(2, "0");
    for (let s = 0; s < 60; s++) {
      const ss = (s + "").padStart(2, "0");
      (hh + mm + ss).includes(K + "") && ans++;
    }
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
