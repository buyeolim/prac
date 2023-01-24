/*
영재의 시험
boj.kr/19949
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const sol = input[0].split(" ").map(Number);

const sheet = new Array(10).fill(0);
let ans = 0;
const dfs = (q) => {
  if (q === 10) {
    let cnt = 0;
    for (let i = 0; i < 10; i++) {
      sol[i] === sheet[i] ? cnt++ : null;
    }

    cnt >= 5 ? ans++ : null;

    return;
  }

  for (let num = 1; num < 6; num++) {
    if (q > 1) {
      if (sheet[q - 2] === sheet[q - 1] && sheet[q - 1] === num) continue;
    }

    sheet[q] = num;
    dfs(q + 1);
  }
};

dfs(0);
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
