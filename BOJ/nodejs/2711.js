/*
오타맨 고창영
https://boj.kr/2711
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const T = +input[0];
const res = new Array(T);
for (let t = 0; t < T; t++) {
  const [pos, str] = input[1 + t]
    .split(" ")
    .map((ele) => (isNaN(ele) ? ele : +ele));

  const arr = str.split("");
  arr.splice(pos - 1, 1);
  res[t] = arr.join("");
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
