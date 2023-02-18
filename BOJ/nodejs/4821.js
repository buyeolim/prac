/*
페이지 세기
boj.kr/4821
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = new Array();
let lc = 0;
while (true) {
  const P = 1 * input[lc++];
  if (P === 0) break;
  const T = input[lc++].split(",");

  const check = new Array(P + 1).fill(0);
  for (let i = 0; i < T.length; i++) {
    let range = T[i].split("-").map(Number);
    if (range.length === 1) {
      let p = range[0];
      if (p < P + 1) check[p] = 1;
    } else if (range[0] > range[1]) {
      continue;
    } else {
      for (let p = range[0]; p <= range[1]; p++) {
        if (p > P) break;
        check[p] = 1;
      }
    }
  }

  ans.push(check.reduce((cur, val) => cur + val, 0));
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
