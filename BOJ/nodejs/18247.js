/*
겨울왕국 티켓 예매
https://boj.kr/18247
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const T = +input[0];
const res = new Array(T);
for (let t = 0; t < T; t++) {
  const [N, M] = input[1 + t].split(" ").map(Number);
  if (N < 12 || M < 4) {
    res[t] = -1;
    continue;
  }

  res[t] = M * 11 + 4;
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
