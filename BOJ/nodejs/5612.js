/*
터널의 입구와 출구
boj.kr/5612
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0]; // 조사한 시간
let m = 1 * input[1]; // 조사 시작할 때, 터널 안에 들어있는 차량의 수

let ans = m;
for (let i = 0; i < n; i++) {
  let [a, b] = input[2 + i].split(" ").map(Number); // [입구를 통과한 차의 수, 출구를 통과한 차의 수]
  m = m - b + a;

  if (m < 0) {
    ans = 0;
    break;
  }
  ans = Math.max(m, ans);
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
