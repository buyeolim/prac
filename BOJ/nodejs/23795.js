/*
사장님 도박은 재미로 하셔야 합니다
boj.kr/23795
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = 0;
for (let lc = 0; lc < 2000; lc++) {
  const money = 1 * input[lc];
  if (money === -1) break;

  ans += money;
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
