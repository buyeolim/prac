/*
상근이의 친구들
https://boj.kr/5717 
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

let lc = 0;
const res = new Array();
while (true) {
  const [M, F] = input[lc++].split(" ").map(Number);
  if (M + F === 0) break;

  res.push(M + F);
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
