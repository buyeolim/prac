/*
첼시를 도와줘!
boj.kr/11098
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let lc = 0;
const n = +input[lc++];
const ans = new Array(n);
for (let t = 0; t < n; t++) {
  const p = +input[lc++];
  const infos = new Array(p);
  for (let i = 0; i < p; i++) {
    const [price, name] = input[lc++].split(" ");
    infos[i] = [+price, name];
  }
  infos.sort((a, b) => b[0] - a[0]);
  ans[t] = infos[0][1];
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
