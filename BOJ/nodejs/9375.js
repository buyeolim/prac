/*
패션왕 신해빈
https://boj.kr/9375
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

let lc = 0;
const T = +input[lc++];
const res = new Array(T).fill(0);
for (let t = 0; t < T; t++) {
  const N = +input[lc++];
  const C = new Object();
  for (let n = 0; n < N; n++) {
    const [name, type] = input[lc++].split(" ");
    Object.hasOwn(C, type) ? (C[type] = C[type] + 1) : (C[type] = 1);
  }
  res[t] = Object.values(C).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
