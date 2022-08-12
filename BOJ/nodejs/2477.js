/*
참외밭
2477
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const K = 1 * input[0];
const val = [];
const cnt = new Set();
for (let i = 0; i < 6; i++) {
  let [d, len] = input[1 + i].split(" ").map(Number);
  val[i] = [d, len];
  if (!cnt.has(d)) {
    cnt.add(d);
  } else {
    cnt.delete(d);
  }
}

// 큰 사각형
let big = 1;
for (let i = 0; i < 6; i++) {
  let d = val[i][0];
  let len = val[i][1];
  if (cnt.has(d)) big *= len;
}

// 작은 사각형
while (!cnt.has(val[0][0]) || !cnt.has(val[1][0])) {
  let tmp = val.splice(0, 1);
  val.splice(5, 1, ...tmp);
}
let small = val[3][1] * val[4][1];

let ans = (big - small) * K;
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
