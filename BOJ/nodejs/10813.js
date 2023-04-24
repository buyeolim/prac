/*
공 바꾸기
boj.kr/10813
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const B = Array.from({ length: N + 1 }, (v, i) => i);
for (let m = 0; m < M; m++) {
  let [i, j] = input[1 + m].split(" ").map(Number);

  [B[i], B[j]] = [B[j], B[i]];
}

B.shift();
const ans = B;
console.log(ans.join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
