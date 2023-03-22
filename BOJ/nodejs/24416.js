/*
알고리즘 수업 - 피보나치 수 1
boj.kr/24416
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0];

const ans = [0, 0];
// 재귀 호출
const fRecursive = (n) => {
  if (n === 1 || n === 2) {
    // 코드1
    ans[0]++;
    return 1;
  } else {
    return fRecursive(n - 1) + fRecursive(n - 2);
  }
};

// 동적 프로그래밍
const f = new Array(n + 1).fill(0);
const fDP = (n) => {
  f[1] = f[2] = 1;
  for (let i = 3; i < n + 1; i++) {
    // 코드2
    ans[1]++;
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
};

fRecursive(n);
fDP(n);

console.log(ans.join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
