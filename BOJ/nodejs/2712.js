/*
미국 스타일
https://boj.kr/2712
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const T = input[0].split(" ").map(Number);
const res = new Array(T);
for (let t = 0; t < T; t++) {
  const [val, type] = input[1 + t]
    .split(" ")
    .map((ele) => (isNaN(ele) ? ele : 1 * ele));

  type === "kg" && (res[t] = `${(val * 2.2046).toFixed(4)} lb`);
  type === "lb" && (res[t] = `${(val * 0.4536).toFixed(4)} kg`);
  type === "g" && (res[t] = `${(val * 3.7854).toFixed(4)} l`);
  type === "l" && (res[t] = `${(val * 0.2642).toFixed(4)} g`);
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
