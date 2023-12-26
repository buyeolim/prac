/*
진주로 가자! (Easy)
https://boj.kr/31009
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = +input[0];
const D = new Array(N);
const C = new Array(N);
const res = [0, 0];
for (let i = 0; i < N; i++) {
  [D[i], C[i]] = input[1 + i]
    .split(" ")
    .map((ele) => (isNaN(ele) ? ele : 1 * ele));

  if (D[i] === "jinju") res[0] = C[i];
}
C.forEach((c) => {
  if (c > res[0]) res[1]++;
});
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
