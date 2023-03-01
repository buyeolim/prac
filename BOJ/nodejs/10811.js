/*
바구니 뒤집기
boj.kr/10811
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let ans;
const arr = Array.from({ length: N }, (v, i) => i + 1);
for (let m = 0; m < M; m++) {
  let [i, j] = input[1 + m].split(" ").map(Number);
  let tmp = arr.slice(i - 1, j);
  tmp.reverse();
  arr.splice(i - 1, j - i + 1, ...tmp);
}
ans = arr.join(" ");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
