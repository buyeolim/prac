/*
바구니 순서 바꾸기
boj.kr/10812
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const buckets = Array.from({ length: N + 1 }, (v, i) => i);
for (let m = 0; m < M; m++) {
  let [i, j, k] = input[1 + m].split(" ").map(Number);
  let tmp = buckets.slice(i, j + 1);
  let mid = buckets[k];

  while (tmp[0] !== mid) {
    tmp.push(tmp.shift());
  }

  let idx = i;
  while (idx <= j) {
    buckets[idx] = tmp[idx - i];
    idx++;
  }
}

buckets.shift();
let ans = buckets;
console.log(ans.join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
