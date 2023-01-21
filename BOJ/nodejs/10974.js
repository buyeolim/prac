/*
모든 순열
boj.kr/10974
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

const check = new Array(N + 1).fill(0);
const ans = [];
const S = [];
const dfs = (lv) => {
  if (lv === N) {
    ans.push(S.join(" "));

    return;
  }

  for (let n = 1; n < N + 1; n++) {
    if (check[n] === 0) {
      check[n] = 1;
      S.push(n);
      dfs(lv + 1);
      check[n] = 0;
      S.pop(n);
    }
  }
};

dfs(0);
console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
