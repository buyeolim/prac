/*
파인만
boj.kr/5724
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = Array.from({ length: 101 }, (v, i) => i);
for (let n = 1; n < 101; n++) {
  arr[n] = arr[n - 1] + n ** 2;
}

let lc = 0;
const ans = [];
while (true) {
  const N = 1 * input[lc++];
  if (N === 0) break;

  ans.push(arr[N]);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
