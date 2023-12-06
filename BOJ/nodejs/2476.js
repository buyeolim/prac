/*
주사위 게임
https://boj.kr/2476
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = +input[0];
let ans = 0;
for (let n = 0; n < N; n++) {
  const D = input[1 + n].split(" ").map(Number);
  D.sort((a, b) => a - b);
  let res;
  if (D[0] === D[1] && D[1] === D[2]) {
    // 1. 같은 눈이 3개: 10,000원+(같은 눈)×1,000
    res = 10000 + D[0] * 1000;
  } else if (D[0] === D[1] || D[1] === D[2]) {
    // 2. 같은 눈이 2개: 1,000원+(같은 눈)×100
    res = 1000 + D[1] * 100;
  } else {
    // 3. 모두 다른 눈: (그 중 가장 큰 눈)×100
    res = D[2] * 100;
  }

  ans = Math.max(ans, res);
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
