/*
숫자 맞추기 게임
boj.kr/4892
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let lc = 0;
const ans = [];
while (true) {
  const n0 = 1 * input[lc++];
  if (n0 === 0) break;

  const n1 = 3 * n0;
  const n2 = n1 % 2 === 0 ? n1 / 2 : (n1 + 1) / 2;
  const n3 = 3 * n2;
  const n4 = Math.floor(n3 / 9);

  ans.push(`${lc}. ${n0 === 2 * n4 ? `even` : `odd`} ${n4}`);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
