/*
약수 구하기
boj.kr/2501
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map((ele) => 1 * ele);
let cnt = 0;
let ans = 0;
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    cnt++;
  }

  if (cnt === K) {
    ans = i;
    break;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
