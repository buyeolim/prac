/*
앵그리 창영
https://boj.kr/3034
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, W, H] = input[0].split(" ").map(Number);
const res = new Array(N);
for (let n = 0; n < N; n++) {
  const len = +input[1 + n];
  res[n] =
    len <= W || len <= H || len <= Math.sqrt(W ** 2 + H ** 2) ? "DA" : "NE";
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
