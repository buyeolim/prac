/*
칸토어 집합
boj.kr/4779
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const ans = [];
let lc = 0;
while (input[lc]) {
  const N = 1 * input[lc++];
  const S = new Array(3 ** N).fill("-");

  dq(S, 0, S.length);
  ans.push(S.join(""));
}

function dq(arr, start, end) {
  const len = end - start;
  if (len < 3) return;

  const s = start + len / 3;
  const e = start + 2 * (len / 3);
  for (let i = s; i < e; i++) {
    arr[i] = " ";
  }

  dq(arr, start, s);
  dq(arr, e, end);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
