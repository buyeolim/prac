/*
캠핑
boj.kr/4796
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let lc = 0;
const ans = [];
while (true) {
  const [L, P, V] = input[lc++].split(" ").map(Number);
  if (!(L + P + V)) break;

  ans.push(
    `Case ${lc}: ${Math.floor(V / P) * L + ((V % P) - L <= 0 ? V % P : L)}`
  );
}
console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
