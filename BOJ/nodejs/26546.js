/*
Reverse
https://boj.kr/26546 
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const n = 1 * input[0];
const res = new Array(n);
for (let idx = 0; idx < n; idx++) {
  const [str, i, j] = input[1 + idx]
    .split(" ")
    .map((ele) => (isNaN(ele) ? ele.split("") : 1 * ele));

  str.splice(i, j - i);
  res[idx] = str.join("");
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
