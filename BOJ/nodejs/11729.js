/*
하노이 탑 이동 순서
boj.kr/11729
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

let res = [];
function hanoi(n, from, by, to) {
  if (n === 1) {
    res.push([from, to]);
    return;
  }
  hanoi(n - 1, from, to, by);
  res.push([from, to]);
  hanoi(n - 1, by, from, to);
}

hanoi(N, 1, 2, 3);

const K = res.length;
let ans = `${K}\n`;
for (let i = 0; i < K; i++) {
  let [A, B] = res[i];
  ans += `${A} ${B}\n`;
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
