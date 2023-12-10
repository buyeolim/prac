/*
Electric Bill
https://boj.kr/25881
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [a, b] = input[0].split(" ").map(Number);
const n = +input[1];
const res = new Array(n);
for (let i = 0; i < n; i++) {
  const c = +input[2 + i];
  if (c <= 1000) {
    res[i] = `${c} ${c * a}`;
  } else {
    res[i] = `${c} ${1000 * a + (c - 1000) * b}`;
  }
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
